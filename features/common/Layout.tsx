// React , Next js packages
import React, { Children } from "react";
import Head from "next/head";
// Custom components
import Header from "./Header";
import Footer from "./Footer";

function Layout(props: any) {
  //** components -- props */
  const { children, title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {/* navigation header */}
      <Header />
      <div>{children}</div>
      {/* footer navigation  */}
      <Footer />
    </div>
  );
}

export default Layout;
