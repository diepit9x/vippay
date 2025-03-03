import ArticleList from '@/components/home/HomeArticle';
import ProviderSlider from '@/components/home/HomeProvider';
import BannerSlider from '@/components/home/HomeSlider';
import { Helmet } from 'react-helmet-async';
import ExchangeRateTable from '@/components/card/recharge/CardRechargeRate';
import ExchangeForm from '@/components/card/recharge/CardRechargeForm';

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Vippay - easy payment</title>
            </Helmet>
            <BannerSlider />
            <ExchangeForm />
            <ExchangeRateTable />
            <ArticleList />
            <ProviderSlider />
        </>
    );
};
export default HomePage;
