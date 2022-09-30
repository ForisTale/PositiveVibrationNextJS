import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from 'react-bootstrap/SSRProvider';
import GeneralLayout from "../components/layout/GeneralLayout";
import "./_app.globalStyles.css";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <SSRProvider>
      <Head>
        <title>Anna Zgłobicka</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
    </SSRProvider>
)
}

export default MyApp
