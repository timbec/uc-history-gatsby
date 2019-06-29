import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BannerImage from '../components/home/BannerImage'; 
import NewsSection from '../components/home/NewsSection'; 
import PlaceSection from '../components/home/PlaceSection'; 
import CommentSection from '../components/home/CommentSection'; 
import ArticleSection from '../components/home/ArticleSection'; 
import PhotographSection from '../components/home/PhotographSection'; 
import AboutSection from '../components/home/AboutSection'; 
import RecentSection from '../components/home/RecentSection'; 

/**
 * Break this page up into components
 * go through site and see what sections could be broken into components. For example - can we have a single post component to serve the different sections? Should there be different types of poss? 
 * 
 *  - not many newspapers/sites in general have sliders anymore. However, I still like having those big images at the top. 
 * - at the bottom, most newspapers just have sections of ancillary content. maybe I should just simplify the front page as much as posssible. 
 * 
 * - Context API is good for search - don't need it for anything else, Should be able to pass props with just arrow based functions.  
 * 
 * For Front page: 
 * - Banner (top)
 * - News
 * - Articles, errata
 * - photographs
 * - Places
 * - Comments
 * - About
 * - Recent
 * 
 * Sidebar: 
 * - 
 */

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <BannerImage />
    <NewsSection />
    <CommentSection />
    <PlaceSection />
    <ArticleSection />
    <PhotographSection />
    <AboutSection />
    <RecentSection />
  </Layout>
)

export default IndexPage
