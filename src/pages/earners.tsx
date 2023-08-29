import type { NextPage } from "next";
import Head from "next/head";
import { EarnersView } from "../views";

const Earners: NextPage = (props) => {
  return (
    <div className="w-full">
      <Head>
        <title>iHub Global Admin - Earners</title>
        <meta
          name="description"
          content="iHub Global Admin"
        />
      </Head>
      <EarnersView />
    </div>
  );
};

export default Earners;
