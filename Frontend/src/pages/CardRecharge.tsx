import CardRechargeForm from '@/components/card/CardRechargeForm';
import TableUser from '@/components/card/CardRechargeHistory';
import RechargeRateTable from '@/components/card/CardRechargeRate';
import { Helmet } from 'react-helmet-async';

const CardRechargePage = () => {
    return (
        <>
            <CardRechargeForm />
            <RechargeRateTable />
            <TableUser />
        </>
    );
};
export default CardRechargePage;
