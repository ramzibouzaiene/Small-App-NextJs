import axios from "axios";

const CoinList2 = ({ coinData }) => {
  return (
    <div>
      {coinData.coins.map((coin) => {
        return (
          <div>
            <h1>{coin.name}</h1>
            <img src={coin.icon} />
            <p>{coin.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
  };
};

export default CoinList2;
