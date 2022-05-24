import React from "react";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../style/GlobalStyle";
import Landing from "../components/Landing/index";
import Head from "next/head";

const MyApp = () => {
   return (
      <>
         <Head>
            <title>A-Pizza</title>
            <meta name="viewport" content="width=device-width" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
               name="viewport"
               content="width=device-width, height=device-height, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=yes, viewport-fit=cover"
            />
            <meta content="yes" name="apple-mobile-web-app-capable" />
         </Head>
         <Global styles={GlobalStyles} />
         <Landing />
      </>
   );
};

export default MyApp;
