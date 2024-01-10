import Image from "next/image";
// import styles from './page.module.scss'
import "./page.scss";
import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";

import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import FeatureList from "@/components/FeatureList";
import BusinessBannerForm from "@/components/ContactForm";
import Feature from "@/components/Feature";
import ContactForm from "@/components/ContactForm";
import Updates from "@/components/Updates";

import Business from "@/components/Business";

export default function Home() {
  return (
    <main className="parent-container">
      <NavigationBar />
      <Banner />
      <Clients />
      <Feature />
      <FeatureList />
      <ContactForm />
      <Updates />
      <Business />
      <Footer />
    </main>
  );
}
