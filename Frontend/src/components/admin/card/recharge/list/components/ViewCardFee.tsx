import { useEffect, useState } from 'react';
import { Drawer, Table, InputNumber, Space, Button, Popconfirm, message } from 'antd';
import { ICardRecharge } from '@/models/response/card/card.recharge';
import { vndMoneyFormat } from '@/helpers/format';

interface FeeItem {
    id?: number;
    amount: number;
    fee: number;
    isNew?: boolean;
}

interface IProps {
    openViewCardFee: boolean;
    setOpenViewCardFee: (v: boolean) => void;
    cardData: ICardRecharge | null;
    setCardData: (v: ICardRecharge | null) => void;
}

const ViewCardFee = ({
    openViewCardFee,
    setOpenViewCardFee,
    cardData,
    setCardData,
}: IProps) => {
    const [fees, setFees] = useState<FeeItem[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [editingData, setEditingData] = useState<FeeItem | null>(null);

    useEffect(() => {
        if (cardData?.fees) {
            const sortedFees = [...cardData.fees].sort((a, b) => a.amount - b.amount);
            setFees(sortedFees);
            setEditingIndex(null);
            setEditingData(null);
        }
    }, [cardData]);

    const isDuplicateAmount = (index: number, amount: number) => {
        return fees.some((item, i) => i !== index && item.amount === amount);
    };

    const isValidAmount = (amount: number) => {
        return amount > 0 && amount % 10000 === 0;
    };

    const handleChange = (field: 'amount' | 'fee', value: number) => {
        if (!editingData) return;
        setEditingData({ ...editingData, [field]: value });
    };

    const handleSave = () => {
        if (editingData && editingIndex !== null) {
            if (!isValidAmount(editingData.amount)) {
                message.error('Mệnh giá phải là bội số của 10.000!');
                return;
            }
            if (isDuplicateAmount(editingIndex, editingData.amount)) {
                message.error('Mệnh giá đã tồn tại!');
                return;
            }

            const updated = [...fees];
            updated[editingIndex] = editingData;
            setFees(updated);
            setEditingIndex(null);
            setEditingData(null);
        }
    };

    const handleCancel = () => {
        if (editingIndex !== null) {
            const current = fees[editingIndex];
            if (current.isNew) {
                const updated = [...fees];
                updated.splice(editingIndex, 1);
                setFees(updated);
            }
        }
        setEditingIndex(null);
        setEditingData(null);
    };

    const handleDelete = (index: number) => {
        const updated = [...fees];
        updated.splice(index, 1);
        setFees(updated);
    };

    const handleAdd = () => {
        const newFee: FeeItem = { amount: 0, fee: 0, isNew: true };
        setFees((prev) => [...prev, newFee]);
        setEditingIndex(fees.length);
        setEditingData(newFee);
    };

    const columns = [
        {
            title: 'Mệnh giá (VND)',
            dataIndex: 'amount',
            key: 'amount',
            width: 150,
            render: (_: any, record: FeeItem, index: number) =>
                editingIndex === index ? (
                    <InputNumber
                        min={0}
                        value={editingData?.amount}
                        onChange={(val) => handleChange('amount', val ?? 0)}
                        style={{ width: '100%' }}
                    />
                ) : (
                    vndMoneyFormat(record.amount)
                ),
        },
        {
            title: 'Phí (%)',
            dataIndex: 'fee',
            key: 'fee',
            width: 120,
            render: (_: any, record: FeeItem, index: number) =>
                editingIndex === index ? (
                    <InputNumber
                        min={0}
                        max={100}
                        value={editingData?.fee}
                        onChange={(val) => handleChange('fee', val ?? 0)}
                        addonAfter="%"
                        style={{ width: '100%' }}
                    />
                ) : (
                    `${record.fee}%`
                ),
        },
        {
            title: 'Thao tác',
            key: 'actions',
            width: 180,
            render: (_: any, record: FeeItem, index: number) => (
                <Space>
                    {editingIndex === index ? (
                        <>
                            <Button type="primary" size="small" onClick={handleSave}>
                                Lưu
                            </Button>
                            <Button size="small" onClick={handleCancel}>
                                Hủy
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="small"
                                onClick={() => {
                                    setEditingIndex(index);
                                    setEditingData(record);
                                }}
                                disabled={editingIndex !== null}
                            >
                                Chỉnh sửa
                            </Button>
                            <Popconfirm
                                title="Xóa mệnh giá này?"
                                onConfirm={() => handleDelete(index)}
                                okText="Xóa"
                                cancelText="Hủy"
                                disabled={editingIndex !== null}
                            >
                                <Button
                                    danger
                                    size="small"
                                    disabled={editingIndex !== null}
                                >
                                    Xóa
                                </Button>
                            </Popconfirm>
                        </>
                    )}
                </Space>
            ),
        },
    ];

    return (
        <Drawer
            title={`Bảng phí - ${cardData?.label}`}
            placement="right"
            size="large"
            onClose={() => {
                setOpenViewCardFee(false);
                setCardData(null);
                setFees([]);
                setEditingIndex(null);
                setEditingData(null);
            }}
            open={openViewCardFee}
        >
            <Table
                dataSource={fees}
                columns={columns}
                rowKey={(record, index) => String(record.id ?? `new-${index}`)}
                pagination={false}
                bordered
                size="small"
                scroll={{ x: 500 }}
                style={{ tableLayout: 'fixed' }}
            />

            {editingIndex === null && (
                <Space style={{ marginTop: 24 }}>
                    <Button type="primary" onClick={handleAdd}>
                        Thêm mệnh giá
                    </Button>
                </Space>
            )}
        </Drawer>
    );
};

export default ViewCardFee;
