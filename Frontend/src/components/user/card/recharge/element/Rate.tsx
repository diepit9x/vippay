import { useState } from 'react';
import { Table, Radio, Flex } from 'antd';
import { Container } from 'react-bootstrap';
import { vndMoneyFormat } from '@/helpers/money.format';

const Rate = () => {
    const data = [
        {
            telco: 'VIETTEL',
            agents: [
                { id: 1, fees: { 10000: 20, 20000: 25, 30000: 20 } },
                { id: 2, fees: { 10000: 19, 20000: 23, 30000: 19 } },
            ],
        },
        {
            telco: 'VINAPHONE',
            agents: [
                {
                    id: 1,
                    fees: {
                        10000: 27,
                        20000: 24,
                        30000: 15,
                        50000: 27,
                        100000: 24,
                        200000: 15,
                        300000: 15,
                        500000: 15,
                        1000000: 15,
                    },
                },
                { id: 1, fees: { 10000: 30, 20000: 25, 30000: 18 } },
            ],
        },
    ];

    const [selectedTelco, setSelectedTelco] = useState(data[0].telco);

    const selectedData = data.find((d) => d.telco === selectedTelco);
    const agents = selectedData ? selectedData.agents : [];
    const amounts = Object.keys(agents[0]?.fees || {}).map(Number);

    const tableData = agents.map((agent) => {
        const row = { key: agent.id, agent: `Agent ${agent.id}` };
        amounts.forEach((amount) => {
            row[amount] = agent.fees[amount] || '-';
        });
        return row;
    });

    const columns = [
        { title: 'Nhóm', dataIndex: 'agent', key: 'agent' },
        ...amounts.map((amount) => ({
            title: vndMoneyFormat(amount),
            dataIndex: amount,
            key: amount,
        })),
    ];

    return (
        <Container>
            <div className="description">
                <div className="text-center title">Bảng Phí Đổi Thẻ Cào</div>
            </div>
            <Flex justify="center">
                <Radio.Group
                    buttonStyle="solid"
                    value={selectedTelco}
                    onChange={(e) => setSelectedTelco(e.target.value)}
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}
                >
                    {data.map((d) => (
                        <Radio.Button key={d.telco} value={d.telco}>
                            {d.telco}
                        </Radio.Button>
                    ))}
                </Radio.Group>
            </Flex>
            <Table
                className="custom-ant-table"
                style={{ marginTop: '10px' }}
                size="small"
                columns={columns}
                dataSource={tableData}
                pagination={false}
                scroll={{ x: 991 }}
                bordered
            />
        </Container>
    );
};

export default Rate;
