// react
import { FC } from "react";
// styles
import styles from "./App.module.scss";
import { AppRouter } from "./config/route";

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <div className={styles.App}>
      <AppRouter />
    </div>
  );
};

// TODO new key
// 'x-rapidapi-key': '39b2663b7amshf5cc639e121dce1p132880jsn823965c2f0ef',
// 'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'

// import { useEffect } from "react";
// import "./App.css";
// import axios from "axios";

// const options = {
//   method: "GET",
//   url: "https://real-time-amazon-data.p.rapidapi.com/search",
//   params: {
//     query: "Phone",
//     page: "1",
//     country: "US",
//     sort_by: "RELEVANCE",
//     product_condition: "ALL",
//     is_prime: "false",
//     deals_and_discounts: "NONE",
//   },
//   headers: {
//     "x-rapidapi-key": "0d30c491c2msha8e35d60ca0f5f6p1217bajsnb5aaf6c82c53",
//     "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
//   },
// };

// const App = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.request(options);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return <></>;
// };

// export default App;
