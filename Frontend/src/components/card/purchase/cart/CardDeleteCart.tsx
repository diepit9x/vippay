import { DeleteOutlined } from '@ant-design/icons';
import type { PopconfirmProps } from 'antd';
import { Popconfirm } from 'antd';

interface IProps {
    uuid: string;
    handleDelete: (uuid: string) => void;
}

const CardDeleteCart = (props: IProps) => {
    const confirm: PopconfirmProps['onConfirm'] = (e) => {
        props.handleDelete(props.uuid);
    };

    return (
        <Popconfirm
            placement="topRight"
            title="Xóa thẻ"
            description="Bạn có muốn xóa thẻ này?"
            onConfirm={confirm}
            okText="Yes"
            cancelText="No"
        >
            <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
        </Popconfirm>
    );
};

export default CardDeleteCart;
