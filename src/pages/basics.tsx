import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>iHub Global Admin</title>
        <meta
          name="description"
          content="iHub Global Admin"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
