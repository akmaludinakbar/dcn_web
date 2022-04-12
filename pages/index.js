import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";
import Dashboard from "../comps/module/companyprofile/home";
import Sejarah from "../comps/module/companyprofile/sejarah";
import VisiMisi from "../comps/module/companyprofile/visimisi";
import Product from "../comps/module/companyprofile/product";
import Whyus from "../comps/module/companyprofile/whyus";
import Client from "../comps/module/companyprofile/client";
import Testimoni from "../comps/module/companyprofile/testimoni";
import Dokumentasi from "../comps/module/companyprofile/dokumentasi";
import Layout from "../comps/Layout";
export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Ninja List | Home</title>
          <meta name="keywords" content="ninjas" />
        </Head>
        <div>
          {/* <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p> */}
          {/* <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link> */}
          <Dashboard id="dashboard" />
          <Sejarah id="sejarah" />
          <VisiMisi id="visimisi" />
          <Product id="product" />
          <Whyus id="whyus" />
          <Client id="client" />
          <Testimoni id="testimoni" />
          <Dokumentasi id="dokumentasi" />
        </div>
      </Layout>
    </>
  );
}
