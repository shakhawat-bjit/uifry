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
import { featuresListData } from "./data/featureList";
import { contactData } from "./data/contact";
import { updatesData } from "./data/update";
import { businessData } from "./data/business";
import { faqData } from "./data/faq";
import { footerData } from "./data/footer";

export default function Home() {
  return (
    <main className="parent-container">
      <NavigationBar navigationBarData={navigationBarData} />
      <Banner bannerData={bannerData} />
      <Clients clientsData={clientsData} />
      <Feature featureData={featureData} />
      <FeatureList featuresListData={featuresListData} />
      <Contact contactData={contactData} />
      <Updates updatesData={updatesData} />
      {/* <Business businessData={businessData} />
      <FeatureList featuresListData={featuresListData} />
      <Faq faqData={faqData} />
      <Footer footerData={footerData} /> */}
    </main>
  );
}
