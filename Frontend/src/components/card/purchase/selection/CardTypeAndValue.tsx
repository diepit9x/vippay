import { Checkbox, CheckboxOptionType, Radio, RadioChangeEvent } from 'antd';
import { useEffect, useState } from 'react';
import { vndFormat } from '@/helpers/date.range';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectionCart } from '@/redux/cart/cart.slice';

interface ICardTelco {
    id: number;
    telco: string;
    label: string;
    image: string;
    discount: number;
    amounts: number[];
}

interface ICardType {
    id: number;
    type: string;
    label: string;
    telcos: ICardTelco[];
}

const CardTypeAndValue = () => {
    const data: ICardType[] = [
        {
            id: 1,
            type: 'mobile-card',
            label: 'Thẻ điện thoại',
            telcos: [
                {
                    id: 101,
                    telco: 'viettel',
                    label: 'Viettel',
                    image: '/storage/userfiles/images/thecao/the-viettel.png',
                    discount: 3,
                    amounts: [
                        10000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000,
                    ],
                },
                {
                    id: 102,
                    telco: 'vinaphone',
                    label: 'Vinaphone',
                    image: '/storage/userfiles/images/thecao/the-vinaphone.png',
                    discount: 2,
                    amounts: [
                        20000, 30000, 50000, 100000, 200000, 300000, 500000, 1000000,
                    ],
                },
                {
                    id: 103,
                    telco: 'mobifone',
                    label: 'Mobifone',
                    image: '/storage/userfiles/images/thecao/the-garena.png',
                    discount: 4,
                    amounts: [
                        10000, 20000, 30000, 100000, 200000, 300000, 500000, 1000000,
                    ],
                },
            ],
        },
        {
            id: 2,
            type: 'game-card',
            label: 'Thẻ game',
            telcos: [
                {
                    id: 201,
                    telco: 'zing',
                    label: 'Zing',
                    image: '/storage/userfiles/images/thecao/the-zing.png',
                    discount: 8,
                    amounts: [
                        10000, 20000, 30000, 50000, 100000, 300000, 500000, 1000000,
                    ],
                },
                {
                    id: 202,
                    telco: 'garena',
                    label: 'Garena',
                    image: '/storage/userfiles/images/thecao/the-garena.png',
                    discount: 7,
                    amounts: [
                        10000, 20000, 30000, 50000, 100000, 200000, 500000, 1000000,
                    ],
                },
                {
                    id: 203,
                    telco: 'vcoin',
                    label: 'Vcoin',
                    image: '/storage/userfiles/images/thecao/the-vcoin.png',
                    discount: 12,
                    amounts: [
                        10000, 20000, 30000, 50000, 100000, 200000, 300000, 1000000,
                    ],
                },
            ],
        },
    ];
    const dispatch = useAppDispatch();
    const cartData = useAppSelector((state) => state.cart.cart);

    const [radioOptions, setRadioOptions] = useState<CheckboxOptionType[]>([]);
    const [selectedType, setSelectedType] = useState<ICardType | null>(null);
    const [selectedTelco, setSelectedTelco] = useState<ICardTelco | null>(null);

    useEffect(() => {
        setRadioOptions(data.map((d) => ({ value: d.type, label: d.label })));
        setSelectedType(data[0]);
        setSelectedTelco(data[0].telcos[0]);
    }, []);

    const handleSelectedType = (e: RadioChangeEvent) => {
        setSelectedType(data.filter((d) => d.type === e.target.value)[0]);
        setSelectedTelco(null);
    };
    const handleAmountSelection = (amount: number) => {
        if (!selectedTelco) return;
        dispatch(
            selectionCart({
                uuid: uuidv4(),
                idTelco: selectedTelco.id,
                telco: selectedTelco.telco,
                label: selectedTelco.label,
                amount,
                discount: selectedTelco.discount,
                quantity: 1,
            }),
        );
    };

    const getTelcoQuantity = (id: number) => {
        return cartData
            .filter((item) => item.idTelco === id)
            .reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <>
            <Radio.Group
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
                value={selectedType?.type}
                onChange={(e) => handleSelectedType(e)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: '5px',
                }}
            />
            <Radio.Group buttonStyle="solid" className="custom-card-radio-group">
                {selectedType?.telcos.map((telco) => (
                    <div
                        key={telco.id}
                        className="card-product-container"
                        onClick={() => setSelectedTelco(telco)}
                    >
                        <div
                            className={`card-product ${
                                telco === selectedTelco ? 'card-product-checked' : ''
                            }`}
                            style={{ padding: 5, position: 'relative' }}
                        >
                            <div className="card-image">
                                <img src={telco.image} alt={telco.telco} />
                            </div>
                            {getTelcoQuantity(telco.id) > 0 && (
                                <span className="badge">
                                    {getTelcoQuantity(telco.id)}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </Radio.Group>
            {selectedTelco && (
                <Checkbox.Group
                    className="custom-card-radio-group"
                    value={cartData
                        .filter((item) => item.telco === selectedTelco.telco)
                        .map((item) => item.amount)}
                >
                    {selectedTelco?.amounts.map((amount, index) => (
                        <Checkbox
                            value={amount}
                            key={index}
                            className="card-product-container"
                            onClick={() => handleAmountSelection(amount)}
                        >
                            <div
                                className={`card-product`}
                                style={{ padding: 0, width: '100%' }}
                            >
                                <div className="card-text">
                                    <div className="label-card">
                                        {selectedTelco.label}
                                    </div>
                                    <div className="price-card">{vndFormat(amount)}</div>
                                </div>
                            </div>
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            )}
        </>
    );
};
export default CardTypeAndValue;
