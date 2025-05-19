import { dateRangeValidate } from '@/helpers/date.range';
import { ICardRecharge } from '@/models/response/card/card.recharge';
import {
    CheckCircleOutlined,
    CloseCircleOutlined,
    DeleteOutlined,
    EditOutlined,
    EyeTwoTone,
    PlusOutlined,
} from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { PageContainer, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import { useRef, useState } from 'react';
import ViewCardDetail from './view/ViewCardDetail';
import dayjs from 'dayjs';

type TSearch = {
    fullName: string;
    email: string;
    createdAt: string;
    createdAtRange: string;
};
interface IUserTable {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    role: string;
    avatar: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const CardPurchaseList = () => {
    const [openViewCardDetail, setOpenViewCardDetail] = useState<boolean>(false);
    const [cardData, setCardData] = useState<ICardRecharge | null>(null);

    const [meta, setMeta] = useState({
        current: 1,
        pageSize: 10,
        pages: 0,
        total: 0,
    });
    const listUsers = useRef<ICardRecharge[]>([]);
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUserTable | null>(null);
    const [isModalAddUserOpen, setIsModalAddUserOpen] = useState<boolean>(false);
    const [isModalImportUserOpen, setIsModalImportUserOpen] = useState<boolean>(false);
    const [isModalUpdateUserOpen, setIsModalUpdateUserOpen] = useState<boolean>(false);

    const actionRef = useRef<ActionType>();

    const FakeData: ICardRecharge[] = [
        {
            id: 1,
            label: 'Viettel',
            type: 'VIETTEL',
            fees: [
                { amount: 10000, fee: 10 },
                { amount: 20000, fee: 11 },
                { amount: 50000, fee: 12 },
                { amount: 100000, fee: 9 },
            ],
            status: true,
            isAuto: true,
            autoFeeUpdate: true,
            feeMarkup: 5,
            createdAt: '2025-05-12T15:30:00Z',
            updatedAt: '2025-05-12T15:30:00Z',
        },
        {
            id: 2,
            label: 'Vinaphone',
            type: 'VINAPHONE',
            fees: [
                { amount: 10000, fee: 20 },
                { amount: 20000, fee: 21 },
                { amount: 50000, fee: 22 },
                { amount: 100000, fee: 19 },
            ],
            status: false,
            isAuto: false,
            autoFeeUpdate: false,
            feeMarkup: 5,
            createdAt: '2024-04-12T15:30:00Z',
            updatedAt: '2024-04-12T15:30:00Z',
        },
    ];

    const handleActionRef = () => {
        actionRef.current?.reload();
    };

    const columns: ProColumns<ICardRecharge>[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            search: false,
            width: 50,
            ellipsis: true,
            render: (_, record) => (
                <a
                    href="#"
                    onClick={() => {
                        alert('view card');
                    }}
                >
                    {record.id}
                </a>
            ),
        },
        {
            title: 'Tên thẻ',
            dataIndex: 'label',
            sorter: true,
        },
        {
            title: 'Loại thẻ',
            dataIndex: 'type',
            sorter: true,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            valueType: 'select',
            valueEnum: {
                true: { text: 'Hoạt động', status: 'Success' },
                false: { text: 'Bảo trì', status: 'Error' },
            },
            sorter: true,
            align: 'center',
            render(dom, entity, index, action, schema) {
                return entity.status ? (
                    <CheckCircleOutlined style={{ color: '#008000' }} />
                ) : (
                    <CloseCircleOutlined style={{ color: '#f00000' }} />
                );
            },
        },
        {
            title: 'Chiết khấu',
            dataIndex: 'cardFee',
            search: false,
            render: (dom, entity, index, action, schema) => {
                const fees = entity.fees.map((item) => item.fee);
                const maxFee = Math.max(...fees);
                const minFee = Math.min(...fees);
                return `${minFee} - ${maxFee}%`;
            },
        },
        {
            title: 'Cập nhật',
            dataIndex: 'updatedAt',
            search: false,
            valueType: 'dateTime',
            sorter: true,
            ellipsis: true,
            render: (dom, entity, index, action, schema) => {
                return dayjs(entity.updatedAt).format('DD/MM/YYYY HH:mm');
            },
        },
        {
            title: 'Thao tác',
            search: false,
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '20px' }}>
                    <EyeTwoTone
                        onClick={() => {
                            setOpenViewCardDetail(true);
                            setCardData(record);
                        }}
                        style={{ cursor: 'pointer', color: 'orange' }}
                    />
                    <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
                </div>
            ),
        },
    ];

    return (
        <>
            <PageContainer>
                <ProTable<ICardRecharge, TSearch>
                    columns={columns}
                    bordered={true}
                    size="small"
                    actionRef={actionRef}
                    scroll={{ x: 991 }}
                    request={async (params, sort, filter) => {
                        console.log(params);
                        // let query = '';
                        // if (params) {
                        //     query += `current=${params.current}&pageSize=${params.pageSize}`;
                        //     if (params.fullName) {
                        //         query += `&fullName=/${params.fullName}/i`;
                        //     }
                        //     if (params.email) {
                        //         query += `&email=/${params.email}/i`;
                        //     }
                        //     const createDateRange = dateRangeValidate(params.createdAtRange);
                        //     if (createDateRange) {
                        //         query += `&createdAt>=${params.createdAtRange[0]}&createdAt<=>${params.createdAtRange[1]}`;
                        //     }
                        // }
                        // if (Object.keys(sort).length > 0) {
                        //     if (sort?.fullName) {
                        //         query += `&sort=${
                        //             sort?.fullName === 'descend' ? '-' : ''
                        //         }fullName`;
                        //     }
                        //     if (sort?.createdAt) {
                        //         query += `&sort=${
                        //             sort?.createdAt === 'descend' ? '-' : ''
                        //         }createdAt`;
                        //     }
                        // } else {
                        //     query += `&sort=-createdAt`;
                        // }
                        // const res;
                        // if (res.data) {
                        //     setMeta(res.data.meta);
                        //     listUsers.current = res.data?.result ?? [];
                        // }
                        return {
                            data: FakeData,
                            page: 1,
                            success: true,
                            total: 10,
                        };
                    }}
                    rowKey="_id"
                    pagination={{
                        current: meta.current,
                        pageSize: meta.pageSize,
                        showSizeChanger: true,
                        total: meta.total,
                        showTotal: (total, range) => {
                            return (
                                <div>
                                    {range[0]}-{range[1]}/{total}
                                </div>
                            );
                        },
                    }}
                    // headerTitle="Table user"
                    toolBarRender={() => [
                        <Button
                            key="button"
                            icon={<PlusOutlined />}
                            onClick={() => {
                                alert('Add');
                            }}
                            type="primary"
                        >
                            Add
                        </Button>,
                    ]}
                />
            </PageContainer>
            <ViewCardDetail
                openViewCardDetail={openViewCardDetail}
                setOpenViewCardDetail={setOpenViewCardDetail}
                cardData={cardData}
                setCardData={setCardData}
            />
        </>
    );
};

export default CardPurchaseList;
