import { vndMoneyFormat } from '@/helpers/format';
import { ICart } from '@/models/request/card/cart/cart';
import { removeCart, updateCart } from '@/redux/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button, InputNumber, Table, TableColumnsType } from 'antd';
import Delete from '@/components/user/card/purchase/element/cart/Delete';

const Cart = () => {
    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state) => state.cart.cart);

    const handleOnChangeQuantity = (quantity: number | null, item: ICart) => {
        if (quantity) {
            const data = { ...item, quantity };
            dispatch(updateCart(data));
        }
    };
    const handleDelete = (uuid: string) => {
        dispatch(removeCart(uuid));
    };

    const columns: TableColumnsType<ICart> = [
        {
            width: '40%',
            title: 'Loại thẻ',
            dataIndex: 'label',
            key: 'label',
            sorter: (a, b) => a.label.localeCompare(b.label), // Sắp xếp theo A-Z
            sortDirections: ['ascend', 'descend'],
            render: (_, record) => (
                <>
                    <div className="type-card-cart">{`${record.label} ${vndMoneyFormat(
                        record.amount,
                    )}`}</div>
                    <div className="discount-card-cart" style={{ fontSize: 12 }}>
                        Chiết khấu:{' '}
                        <span style={{ fontWeight: 600 }}>{record.discount}%</span>
                    </div>
                </>
            ),
        },
        {
            align: 'center',
            title: 'Số lượng',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (_, record) => (
                <InputNumber
                    type="tel"
                    min={1}
                    value={record.quantity}
                    style={{ width: '60px' }}
                    onChange={(value) => handleOnChangeQuantity(value, record)}
                />
            ),
        },
        {
            title: 'Thành tiền',
            dataIndex: 'total',
            key: 'total',
            render: (_, record) =>
                vndMoneyFormat(
                    ((record.amount * (100 - record.discount)) / 100) * record.quantity,
                ),
        },
        {
            align: 'center',
            render: (_, record) => (
                <Delete uuid={record.uuid} handleDelete={handleDelete} />
            ),
        },
    ];
    const totalAmount = cartData.reduce(
        (sum, item) =>
            sum + ((item.amount * (100 - item.discount)) / 100) * item.quantity,
        0,
    );

    return (
        <>
            <Table
                title={() => <div className="ant-table-title-custom">Giỏ hàng</div>}
                // showHeader={false}
                className="custom-ant-table"
                bordered
                dataSource={cartData}
                columns={columns}
                size="small"
                rowKey="uuid"
                locale={{ emptyText: 'Giỏ hàng trống' }}
                footer={() =>
                    cartData.length > 0 ? (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0px 16px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                background: '#fafafa',
                            }}
                        >
                            <span>
                                Tổng cộng:{' '}
                                <span className="total-price">
                                    {vndMoneyFormat(totalAmount)}
                                </span>
                            </span>
                            <Button type="primary">Thanh toán</Button>
                        </div>
                    ) : null
                }
                pagination={false}
            />
        </>
    );
};

export default Cart;
