import ArticleList from '@/components/user/home/HomeArticle';
import ProviderSlider from '@/components/user/home/HomeProvider';
import BannerSlider from '@/components/user/home/HomeSlider';
import { Helmet } from 'react-helmet-async';
import ExchangeRateTable from '@/components/user/card/recharge/element/Rate';
import ExchangeForm from '@/components/user/card/recharge/element/RechargeForm';

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
