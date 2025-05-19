import { vndMoneyFormat } from '@/helpers/format';
import { ITransactionFees } from '@/models/request/transaction/transaction.fee';
import { Table, TableColumnsType } from 'antd';

const Rule = () => {
    const data: ITransactionFees[] = [
        {
            id: 1,
            type: 'transfer',
            role: 'ALL',
            label: 'Phí cố định',
            unit: 'FIXED',
            currency: 'VND',
            feeAmount: 1000,
        },
        {
            id: 2,
            type: 'transfer',
            role: 'ALL',
            label: 'Phí %',
            unit: 'PERCENTAGE',
            currency: 'VND',
            feeAmount: 2,
        },
    ];
    const columns: TableColumnsType<ITransactionFees> = [
        {
            title: 'Loại',
            dataIndex: 'label',
            key: 'label',
        },
        {
            align: 'center',
            title: 'Đơn vị',
            dataIndex: 'unit',
            key: 'unit',
            render: (_, record) => (record.unit === 'FIXED' ? record.currency : '%'),
        },
        {
            align: 'center',
            title: 'Phí',
            dataIndex: 'feeAmount',
            key: 'feeAmount',
            render: (_, record) =>
                record.unit === 'FIXED'
                    ? vndMoneyFormat(record.feeAmount)
                    : `${record.feeAmount}%`,
        },
    ];
    return (
        <Table
            title={() => (
                <div className="ant-table-title-custom">Hạn mức và biểu phí</div>
            )}
            // showHeader={false}
            className="custom-ant-table"
            bordered
            dataSource={data}
            columns={columns}
            size="small"
            rowKey="id"
            pagination={false}
        />
    );
};
export default Rule;
