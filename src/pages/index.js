import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import Services from '@sections/Services';
import Brands from '@sections/Brands';
import About from '@sections/About';
import Contact from '@sections/Contact';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <Services />
    <Brands />
    <About />
    <Contact />
    <Footer />
  </Layout>
);

export default IndexPage;
