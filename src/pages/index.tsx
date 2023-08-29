import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>iHub Global Admin</title>
        <meta
          name="description"
          content="iHub Global Admin"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
