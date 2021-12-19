/*!

=========================================================
* NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Template Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DOMAIN_URL } from "../lib/constants";

import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-dashboard-pro.scss?v=1.1.0";

if (!process.browser) React.useLayoutEffect = React.useEffect;

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;

    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>

        <title>Metapak</title>

            <meta charSet="utf-8" />
            {/* <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /> */}
            <meta httpEquiv="x-ua-compatible" content="ie-edge" />

            <meta name="theme-color" content="#000000" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover" />
            
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="format-detection" content="telephone=no" />

            <meta property="og:title" content="Metapak"/>
            <meta name="description" content="Metapak is a decentralized protocol for metadata management in the metaverse." />
            <meta property="og:url" content={DOMAIN_URL} />
            <meta property="og:site_name" content="Metapak"/>
            <meta property="og:description" content="A metaverse platform."/>
            <meta property="og:image" content={require("assets/img/metapak-preview.png")} />
            <meta property="twitter:image" content={require("assets/img/metapak-preview.png")} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-TileImage" content={require("assets/img//ms-icon-144x144.png")} />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Space+Grotesk:wght@300;500;600;700&family=Orbitron:wght@400;600;800;900&display=swap" rel="stylesheet" />


            <link rel="apple-touch-icon" sizes="72x72" href={require("assets/img/apple-icon-72x72.png")} />
            <link rel="apple-touch-icon" sizes="96x96" href={require("assets/img/apple-icon-96x96.png")} />
            <link rel="apple-touch-icon" sizes="144x144" href={require("assets/img/apple-icon-144x144.png")} />
            <link rel="apple-touch-icon" sizes="192x192" href={require("assets/img/apple-icon-192x192.png")} />
            <link rel="icon" type="image/png" sizes="192x192"  href={require("assets/img/android-chrome-192x192.png")} />
            <link rel="icon" type="image/png" sizes="32x32" href={require("assets/img/favicon-32x32.png")} />
            <link rel="icon" type="image/png" sizes="96x96" href={require("assets/img/favicon-96x96.png")} />
            <link rel="icon" type="image/png" sizes="16x16" href={require("assets/img/favicon-16x16.png")} />
            <link rel="icon shortcut" href={require("assets/img/favicon.ico")} type="image/x-icon" />
            <link rel="manifest" href={require("assets/img/manifest.json")} />
            
            {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}
