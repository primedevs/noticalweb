import React from "react";
import Contact from "../../components/Contact/Contact";
import Head from "next/head";
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Send us a message. We'd like to hear from you."
        />
        <meta property="og:url" content="https://www.primedevs.co/contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
}
