import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { DOMAIN_URL } from "../lib/constants";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            {/* <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /> */}
            <meta name="theme-color" content="#000000" />
            <meta httpEquiv="x-ua-compatible" content="ie-edge" />
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
            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
            
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
          />
          <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
            type="text/css"
            media="screen"
          />
          <link
            rel="stylesheet"
            href="//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css"
            type="text/css"
            media="screen"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />




        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
