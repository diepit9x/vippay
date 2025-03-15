import { ExportOutlined } from '@ant-design/icons';
import { ActionType, ProColumns, ProTable } from '@ant-design/pro-components';
import { Alert, Button } from 'antd';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';

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

const HistoryPage = () => {
    const actionRef = useRef<ActionType>();

    const FakeData: IUserTable = [
        {
            _id: 11,
            fullName: 'Diep',
            email: 'diep@gmail.com',
            phone: '0987654321',
            role: 'Admin',
            avatar: '',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: 2,
            fullName: 'Diep',
            email: 'diep@gmail.com',
            phone: '0987654321',
            role: 'Admin',
            avatar: '',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            _id: 3,
            fullName: 'Diep',
            email: 'diep@gmail.com',
            phone: '0987654321',
            role: 'Admin',
            avatar: '',
            isActive: true,
            createdAt: new Date('2020-10-10 15:43'),
            updatedAt: new Date(),
        },
    ];

    const handleActionRef = () => {
        actionRef.current?.reload();
    };

    const columns: ProColumns<IUserTable>[] = [
        {
            title: 'id',
            dataIndex: '_id',
            search: false,
            width: 50,
            ellipsis: true,
            render: (_, record) => (
                <a href="#" onClick={() => {}}>
                    {record._id}
                </a>
            ),
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
            sorter: true,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            copyable: true,
            ellipsis: true,
        },
        {
            title: 'Created at',
            dataIndex: 'createdAt',
            search: false,
            valueType: 'date',
            sorter: true,
            ellipsis: true,
        },
        {
            title: 'Created at',
            dataIndex: 'createdAtRange',
            hideInTable: true,
            valueType: 'dateRange',
            ellipsis: true,
        },
        {
            title: 'Action',
            search: false,
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '20px' }}>Edit</div>
            ),
        },
    ];

    return (
        <Container className="mb-3">
            <div className="description">
                <div className="text-center title">Lịch sử giao dịch</div>
            </div>
            <div className="alertExchange mb-3"></div>
            <ProTable<IUserTable, TSearch>
                defaultSize="large"
                className="custom-ant-table"
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
                // pagination={{
                //     current: meta.current,
                //     pageSize: meta.pageSize,
                //     showSizeChanger: true,
                //     total: meta.total,
                //     showTotal: (total, range) => {
                //         return (
                //             <div>
                //                 {range[0]}-{range[1]}/{total}
                //             </div>
                //         );
                //     },
                // }}
                // headerTitle="Table user"
                toolBarRender={() => [
                    <Button
                        key="button"
                        icon={<ExportOutlined />}
                        onClick={() => {
                            alert('export');
                        }}
                        type="primary"
                    >
                        Export
                    </Button>,
                ]}
            />
        </Container>
    );
};
export default HistoryPage;
