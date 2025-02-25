import { ICard } from '@/models/card/card';
import { InboxOutlined } from '@ant-design/icons';
import { App, Modal, Table, TableProps, UploadProps } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { useState } from 'react';
import { Buffer } from 'buffer';
import excel from 'exceljs';
import FileSample from '@/assets/files/sample/ImportCards.xlsx?url';
import { vndFormat } from '@/helpers/date.range';
import CardImportDelete from './CardImportDelete';
import { v4 as uuidv4 } from 'uuid';

interface ICardImport extends ICard {
    uuid: string;
}

interface IProps {
    modalCardImportOpen: boolean;
    setModalCardImportOpen: (v: boolean) => void;
    handleGetFormData: () => ICard[];
    handleSetFormData: (v: ICard[]) => void;
}
const CardImportModal = (props: IProps) => {
    const {
        modalCardImportOpen,
        setModalCardImportOpen,
        handleGetFormData,
        handleSetFormData,
    } = props;
    const [dataImport, setDataImport] = useState<ICardImport[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { notification, message } = App.useApp();
    const MAX_UPLOAD: number = 100;

    const handleCancel = () => {
        setModalCardImportOpen(false);
        setDataImport([]);
    };

    const handleImport = () => {
        setIsLoading(true);
        const cardData = handleGetFormData();
        console.log(cardData);
        const cleanedCardData = cardData.filter(
            (card) => card && Object.keys(card).length > 0,
        );
        const data: ICard[] = dataImport.map(({ uuid, ...rest }) => ({ ...rest }));
        handleSetFormData([...cleanedCardData, ...data]);
        handleCancel();
        setIsLoading(false);
    };

    const handleDelete = (uuid: string) => {
        setDataImport((prev) => prev.filter((data) => data.uuid !== uuid));
    };

    const allowedExtensions: string[] = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.ms-excel',
    ];
    const validateFileExtension = ({ type, name }: any) => {
        if (!allowedExtensions || allowedExtensions.length === 0) {
            return true;
        }
        if (type && allowedExtensions.includes(type)) {
            return true;
        }
        if (name) {
            const fileExtension = '.' + name.split('.').pop();
            return allowedExtensions.includes(fileExtension);
        }
        return false;
    };

    const draggerProps: UploadProps = {
        name: 'file',
        multiple: false,
        maxCount: 1,
        accept: allowedExtensions.join(','),
        customRequest({ file, onSuccess, onError }) {
            if (!validateFileExtension(file)) {
                onError!(new Error('Invalid extension'));
                return;
            } else {
                setTimeout(() => {
                    onSuccess!('ok');
                }, 0);
            }
        },
        async onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                setDataImport([]);
            }
            if (status === 'done') {
                if (info.fileList && info.fileList.length > 0) {
                    const file = info.fileList[0].originFileObj;
                    const arrayBuffer = await file!.arrayBuffer();
                    const buffer: ArrayBuffer = Buffer.from(arrayBuffer);

                    const workbook = new excel.Workbook();
                    await workbook.xlsx.load(buffer);
                    const jsonData: ICardImport[] = [];
                    const validFields = new Set<keyof ICardImport>([
                        'telco',
                        'code',
                        'serial',
                        'amount',
                    ]);
                    workbook.worksheets.forEach(function (sheet) {
                        const firstRow = sheet.getRow(1);
                        if (!firstRow.cellCount) return;
                        const keys = firstRow.values as string[];

                        let failCount = 0;

                        sheet.eachRow((row, rowNumber) => {
                            if (rowNumber === 1) return;
                            const values = row.values as string[];
                            const obj: Partial<ICardImport> = {};

                            let isValid = true;

                            for (let i: number = 1; i < keys.length!; i++) {
                                const key = keys[i] as keyof ICardImport;
                                if (validFields.has(key)) {
                                    let value = values[i];

                                    if (
                                        value === undefined ||
                                        value === null ||
                                        value.toString().trim().length === 0
                                    ) {
                                        isValid = false;
                                        break;
                                    }

                                    if (key === 'amount') {
                                        obj.amount = parseFloat(value) || 0;
                                    } else {
                                        obj[key] = value.toString();
                                    }
                                }
                            }

                            if (isValid && Object.keys(obj).length === validFields.size) {
                                obj.uuid = uuidv4();

                                const exists = jsonData.some(
                                    (existingObj) =>
                                        existingObj.code === obj.code &&
                                        existingObj.serial === obj.serial,
                                );

                                if (!exists) {
                                    jsonData.push(obj as ICardImport);
                                } else {
                                    failCount++;
                                }
                            } else {
                                failCount++;
                            }
                        });

                        if (jsonData.length > 0 && jsonData.length <= MAX_UPLOAD) {
                            setDataImport(jsonData);
                            notification.info({
                                message: info.file.name,
                                description: `Thành công: ${jsonData.length} ${
                                    failCount === 0 ? '' : ` | Thất bại: ${failCount}`
                                }`,
                            });
                        } else {
                            message.error(
                                jsonData.length > MAX_UPLOAD
                                    ? `Chỉ có thể import tối đa ${MAX_UPLOAD} thẻ`
                                    : 'Import file thất bại/File không hợp lệ',
                            );
                        }
                    });
                }
            } else if (status === 'error') {
                message.error(`Import ${info.file.name} thất bại.`);
            }
        },
    };

    const columns: TableProps<ICardImport>['columns'] = [
        {
            title: 'Loại thẻ',
            dataIndex: 'telco',
            key: 'telco',
        },
        {
            title: 'Mã thẻ',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Serial',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'Mệnh giá',
            dataIndex: 'amount',
            key: 'amount',
            render: (value, record, index) => (
                <div style={{ color: '#c0514a', fontWeight: 600 }}>
                    {vndFormat(record.amount)}
                </div>
            ),
        },
        {
            render: (value, record, index) => (
                <CardImportDelete uuid={record.uuid} handleDelete={handleDelete} />
            ),
        },
    ];

    return (
        <Modal
            title="Import"
            open={modalCardImportOpen}
            onCancel={handleCancel}
            onOk={handleImport}
            okText={'Import'}
            confirmLoading={isLoading}
            okButtonProps={{
                disabled: dataImport.length === 0 ? true : false,
            }}
            destroyOnClose={true}
        >
            <Dragger
                {...draggerProps}
                style={{ display: dataImport.length > 0 ? 'none' : 'block' }}
            >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click hoặc kéo file để tải lên</p>
                <p className="ant-upload-hint">
                    Định dạng hỗ trợ xls, xlxs.{' '}
                    <a onClick={(e) => e.stopPropagation()} href={FileSample} download>
                        Download file mẫu
                    </a>
                </p>
            </Dragger>
            {dataImport.length > 0 && (
                <Table<ICardImport>
                    className="custom-ant-table"
                    scroll={{ x: 420 }}
                    columns={columns}
                    size="small"
                    dataSource={dataImport}
                    pagination={{
                        // hideOnSinglePage: true,
                        showSizeChanger: false,
                        showTotal: (total, range) => {
                            return (
                                <div>
                                    {range[0]}-{range[1]}/{total}
                                </div>
                            );
                        },
                    }}
                    rowKey="uuid"
                    bordered
                    style={{ marginTop: '10px' }}
                />
            )}
        </Modal>
    );
};
export default CardImportModal;
