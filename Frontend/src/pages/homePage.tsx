import ArticleList from "@/components/home/home.article";
import ProviderSlider from "@/components/home/home.provider";
import BannerSlider from "@/components/home/home.slider";
import { Helmet } from "react-helmet-async";
import ExchangeRateTable from "@/components/card/card.exchangeRate";
import ExchangeForm from "@/components/card/card.exchangeForm";

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
