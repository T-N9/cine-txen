import "../styles/font.css";
import "../styles/globals.css";
import "../styles/style.css";

import { Provider } from "react-redux";
import { store } from "../modules";

import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <main>
        <NavBar/>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default MyApp;
