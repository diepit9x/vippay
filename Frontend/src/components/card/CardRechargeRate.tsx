import { Container, Tab, Tabs } from 'react-bootstrap';

const rechargeRates = [
    {
        provider: 'VIETTEL',
        eventKey: 'viettel',
        rates: [
            {
                group: 'Nhóm Không Bảo Hiểm',
                values: [11, 11, 11, 11, 11, 11, 11, 11, 11],
            },
            {
                group: 'Nhóm Bảo Hiểm',
                values: [11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5],
            },
        ],
        amounts: [
            '10,000đ',
            '20,000đ',
            '30,000đ',
            '50,000đ',
            '100,000đ',
            '200,000đ',
            '300,000đ',
            '500,000đ',
            '1,000,000đ',
        ],
    },
    {
        provider: 'VINAPHONE',
        eventKey: 'vinaphone',
        rates: [
            { group: 'Nhóm Không Bảo Hiểm', values: [12, 13, 14, 16, 17, 11, 19, 11] },
            {
                group: 'Nhóm Bảo Hiểm',
                values: [11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5],
            },
        ],
        amounts: [
            '10,000đ',
            '20,000đ',
            '30,000đ',
            '50,000đ',
            '100,000đ',
            '200,000đ',
            '300,000đ',
            '500,000đ',
        ],
    },
    {
        provider: 'MOBIFONE',
        eventKey: 'mobifone',
        rates: [
            { group: 'Nhóm Không Bảo Hiểm', values: [12, 13, 14, 16, 17, 11, 19, 11] },
            {
                group: 'Nhóm Bảo Hiểm',
                values: [11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5, 11.5],
            },
        ],
        amounts: [
            '10,000đ',
            '20,000đ',
            '30,000đ',
            '50,000đ',
            '100,000đ',
            '200,000đ',
            '300,000đ',
            '500,000đ',
        ],
    },
];

const RechargeRateTable = () => {
    return (
        <Container className="exchangeRateTable">
            <div className="description mb-3">
                <div className="text-center title">Bảng phí đổi thẻ cào</div>
            </div>
            <Tabs
                defaultActiveKey={rechargeRates[0].eventKey}
                id="exchange-rates-tabs"
                className="mb-3"
                justify
            >
                {rechargeRates.map((rateData) => (
                    <Tab
                        eventKey={rateData.eventKey}
                        title={rateData.provider}
                        key={rateData.eventKey}
                    >
                        <div className="table-responsive">
                            <table className="table table-bordered table-custom">
                                <thead>
                                    <tr>
                                        <th className="text-center">Nhóm</th>
                                        {rateData.amounts.map((amount, index) => (
                                            <th className="text-center" key={index}>
                                                {amount}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rateData.rates.map((row, index) => (
                                        <tr key={index}>
                                            <td className="text-center font-weight-bold">
                                                {row.group}
                                            </td>
                                            {row.values.map((value, idx) => (
                                                <td className="text-center" key={idx}>
                                                    {value} %
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );
};

export default RechargeRateTable;
