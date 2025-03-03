import CardRechargeForm from '@/components/card/recharge/CardRechargeForm';
import TableUser from '@/components/card/recharge/CardRechargeHistory';
import RechargeRateTable from '@/components/card/recharge/CardRechargeRate';

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
