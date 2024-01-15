import Image from "next/image";
// import styles from './page.module.scss'
import "./page.scss";
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Feature from "./components/Feature";
import FeatureList from "./components/FeatureList";
import Contact from "./components/Contact";
import Updates from "./components/Updates";
import Business from "./components/Business";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

import { bannerData } from "./data/banner";
import { navigationBarData } from "./data/navigationBar";
import { clientsData } from "./data/clients";
import { featureData } from "./data/feature";
import { featuresData } from "./data/featureList";
import { contactData } from "./data/contact";

export default function Home() {
  // console.log(navigationBarData);
  return (
    <main className="parent-container">
      <NavigationBar navigationBarData={navigationBarData} />
      <Banner bannerData={bannerData} />
      <Clients clientsData={clientsData} />
      <Feature featureData={featureData} />
      <FeatureList featuresData={featuresData} />
      <Contact contactData={contactData} />
      <Updates />
      <Business />
      <FeatureList featuresData={featuresData} />
      <Faq />
      <Footer />
    </main>
  );
}
