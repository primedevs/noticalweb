import React from "react";
import styles from "./PrivacyPolicy.module.scss";
import { Typography } from "@mui/material";
import Head from "next/head";

const renderRichText = (node) => {
  if (node.type === 'paragraph') {
    return <p>{node.children.map(renderRichText)}</p>;
  }
  if (node.type === 'heading') {
    const Tag = `h${node.level}`;
    return <Tag>{node.children.map(renderRichText)}</Tag>;
  }
  if (node.text) {
    if (node.bold) {
      return <strong>{node.text}</strong>;
    }
    if (node.italic) {
      return <em>{node.text}</em>;
    }
    return node.text;
  }
};

export default function Index() {
  const privacyPolicy = [
    {
      type: 'heading',
      level: 1,
      children: [{ text: 'Privacy Policy' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            "This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users (each, a 'User') of our website ('Service'). This privacy policy applies to the Service and all products and services offered by us.",
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      children: [{ text: '1. Personal Identification Information' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, fill out a form, and in connection with other activities, services, features, or resources we make available on our site. Users may be asked for, as appropriate, name, email address. Users may, however, visit our site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain site-related activities.',
        },
      ],
    },
    {
      type: 'heading',
      level: 2,
      children: [{ text: '2. Data Collection and Usage' }],
    },
    {
      type: 'paragraph',
      children: [
        {
          text:
            'We collect and temporarily store certain user Notion database items\' fields, such as Title and ID, for the purpose of polling in order to track updates to the Notion data. This allows us to provide timely and accurate synchronization between Notion tasks and Google Calendar events. We treat all user data with the utmost confidentiality and do not share or use it for purposes other than providing the intended Service.',
        },
      ],
    },
    // Add more sections as needed
  ];

  return (
    <div className={styles.terms}>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Welcome to Notycal! This is our official Privacy Policy that governs your use of our service."
        />
        <meta property="og:url" content="https://www.notycal.com/privacy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.terms_container}>
        <Typography variant="h4" gutterBottom component="div">
          Privacy Policy
        </Typography>
        {privacyPolicy.map(renderRichText)}
      </div>
    </div>
  );
}