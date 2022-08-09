import React from "react";
import Contact from "../../components/Contact/Contact";
import Head from "next/head";
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact us</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        />
        <meta property="og:url" content="https://www.primedevs.co/team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
