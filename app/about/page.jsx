"use client"

// pages/about.js
import Head from 'next/head';
import Layout from '@/components/Layout';

const About = () => (
  <Layout>
    <Head>
      <title>About Us - P4U</title>
    </Head>
    <section className="my-5 p-5 bg-light rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary">About Us</h2>
      <p className="text-dark">Learn more about our company, mission, and team.</p>
    </section>
  </Layout>
);

export default About;
