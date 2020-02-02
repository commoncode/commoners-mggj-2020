import Head from "next/head";

export const PageHead = () => (
  <Head>
    <link
      href="https://fonts.googleapis.com/css?family=Frijole&display=swap"
      rel="stylesheet "
    />
  </Head>
);

const IndexPage = () => (
  <div>
    <PageHead />
    This is the index
  </div>
);

export default IndexPage;
