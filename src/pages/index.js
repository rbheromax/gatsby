import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Products from '@sections/Products';
import ContactForm from '@sections/Contact';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import { Section } from '@components/global';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Section id="top" style={{height: "0px", padding: "0px"}} />
    <Header />
    <About />
    <Products />
    <Team />
    <Faq />
    <ContactForm />
    <Footer />
  </Layout>
);

export default IndexPage;
