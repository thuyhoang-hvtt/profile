import React from "react";
import Link from "next/link";
import Head from "next/head";
import stylesheet from "antd/dist/antd.css";

// style scss
import "scss/app.scss";

// components
import OnePage from "./OnePage";
import NavBar from "components/NavBar";

const App = props => (
  <div className="app">
    <Head>
      <meta charSet="UTF-8" />
      <title>Hello, NextJS!!!</title>
      <meta name="description" content={props.description || ""} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
      <meta property="og:url" content={props.url || ""} />
      <meta property="og:title" content={props.title || ""} />
      <meta property="og:description" content={props.description || ""} />
      <meta name="twitter:site" content={props.url || ""} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={props.ogImage || ""} />
      <meta property="og:image" content={props.ogImage || ""} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <script src="/static/scrolloverflow.js" />
    </Head>
    <NavBar/>
    <OnePage />
  </div>
);

export default App;
