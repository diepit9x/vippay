import ExchangeForm from "@/components/card/card.exchangeForm";
import ExchangeRateTable from "@/components/card/card.exchangeRate";
import { Helmet } from "react-helmet-async";

const CardExchangePage = () => {
  return (
    <>
      <Helmet>
        <title>Đổi thẻ cào</title>
      </Helmet>
      <ExchangeForm />
      <ExchangeRateTable />
    </>
  );
};
export default CardExchangePage;
