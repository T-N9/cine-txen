import { Component } from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
