import "../styles/font.css";
import "../styles/globals.css";
import "../styles/style.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
