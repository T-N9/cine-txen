import "../styles/font.css";
import "../styles/globals.css";
import "../styles/style.css";

import NavBar from "../components/NavBar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <NavBar/>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
