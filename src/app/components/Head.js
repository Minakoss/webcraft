// components/Head.js
import Head from "next/head";

export default function CustomHead({ title, description }) {
  return (
    <Head>
      <title>{title || "WebCraft"}</title>
      <meta name="description" content={description || "Default description"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
