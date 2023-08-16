import React from "react";
import styles from "./Terms.module.scss";
import { Typography } from "@mui/material";
import Head from "next/head";

const terms = [
  {
    type: "paragraph",
    children: [
      {
        text:
          "Welcome to our website! These are the official Terms and Conditions (",
      },
      { text: "Terms", bold: true },
      { text: ") that govern your use of our service. Please read them carefully before you proceed." },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "1. Acceptance of Terms" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "By accessing or using our website (\"Service\"), you agree to these Terms. If you do not agree with any part of these Terms, please refrain from using the Service.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "2. Use of Service" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Our website offers a range of services and features. Your use of the Service implies responsibility for complying with these Terms and any data transferred between platforms.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "3. Account Information" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "To access certain features of the Service, you may need to create an account and provide us with certain information. We do not retain your login credentials beyond their immediate use for accessing the Service.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "4. Privacy Policy" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "We respect your privacy. Any data exchanged between our website and third-party platforms is treated with the utmost confidentiality. We do not share or use your data for purposes other than providing the intended Service.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "5. Two-Way Synchronization" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Our Service facilitates two-way synchronization between Notion tasks and Google Calendar events. While efforts are made for timely updates, real-time synchronization cannot be guaranteed.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "6. Customizable Sync Range" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "You can specify a date range for tasks to sync with Google Calendar. Tasks outside this range will not be included in the synchronization process.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "7. Selective Database Integration" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Choose which Notion databases sync with Google Calendar. This empowers you to view only the tasks of your choosing within your calendar.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "8. Task Management" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "Our Service automates the removal of completed tasks from your Google Calendar, maintaining a clear view of your remaining tasks. However, exercise caution to avoid unintentional deletions.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "9. Custom Calendar Selection" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "You have the ability to designate the Google Calendar where tasks will appear. In the event of its absence, our Service may create a dedicated 'Notion' calendar.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "10. Service Availability" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "While we strive for uninterrupted service, our Service may undergo maintenance, updates, or technical issues that can affect availability.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "11. Modifications to Service" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "We reserve the right to modify, suspend, or discontinue any aspect of the Service without prior notice.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "12. Disclaimer" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "The Service is provided 'as is' without warranties of any kind. We are not responsible for any direct, indirect, incidental, or consequential damages arising from the use of the Service.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "13. Indemnity" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "By using the Service, you agree to indemnify and hold us and our affiliates harmless from any claims, liabilities, or expenses arising from your use of the Service.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "14. Changes to Terms" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "We may update these Terms from time to time. It's your responsibility to review them periodically.",
      },
    ],
  },
  {
    type: "heading",
    level: 2,
    children: [{ text: "15. Contact Us" }],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "For any inquiries regarding these Terms and Conditions, reach out to us at support@ourwebsite.com.",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text:
          "By using our website, you acknowledge your understanding and acceptance of these Terms and Conditions. Enjoy the features and services we offer!",
      },
    ],
  },
];

// You can use this array of terms to generate your desired content format.


const renderRichText = (node) => {
  if (node.type === "paragraph") {
    return <p>{node.children.map(renderRichText)}</p>;
  }
  if (node.type === "heading") {
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

export default function index() {
  return (
    <div className={styles.terms}>
      <Head>
        <title> Terms and Conditions</title>
        <meta
          name="description"
          content="Welcome to Notycal! These are the official Terms and Conditions that govern your use of our service."
        />
        <meta property="og:url" content="https://www.notycal.com/terms" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.terms_container}>
        <Typography variant="h4" gutterBottom component="div">
          Terms and Conditions
        </Typography>
        {terms.map(renderRichText)}
      </div>
    </div>
  );
}
