import React from 'react';
import { Layout } from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Portfolio from '../../components/PageFragments/PortfolioPage/portfolio';
import SEO from '../../components/Seo';

const PortfolioPage = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <SEO
          title="Portfolio"
          description="Brian Han's portfolio."
          path="/portfolio"
        />
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Portfolio</h1>
        </div>
        <Portfolio />
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default PortfolioPage;
