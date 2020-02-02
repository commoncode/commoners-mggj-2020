import Head from "next/head";
import Game from "../components/core/Game";

export const PageHead = () => (
  <Head>
    <link
      href="https://fonts.googleapis.com/css?family=Frijole|Itim&display=swap"
      rel="stylesheet"
    />
  </Head>
);

const IndexPage = () => (
  <>
    <PageHead />
    <Game />
  </>
);

export default IndexPage;
