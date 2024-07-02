"use client";
// pages/resources.js
import Head from 'next/head';
import Layout from '@/components/Layout';

const Resources = () => (
  <Layout>
    <Head>
      <title>Resources - P4U</title>
    </Head>
    <section className="my-5 p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Resources</h2>
      <p>Explore our resources to learn effective strategies for B2B marketing and lead generation.</p>
    </section>
  </Layout>
);

export default Resources;
