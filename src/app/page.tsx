import Image from "next/image";
// import styles from './page.module.scss'
import "./page.scss";
import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";

import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import BusinessBanner from "@/components/BusinessBanner";
import FeatureList from "@/components/FeatureList";
import BusinessBannerForm from "@/components/BusinessBannerForm";

export default function Home() {
  return (
    <main className="parent-container">
      <NavigationBar />
      <Banner />
      <Clients />
      <BusinessBanner />
      <FeatureList />
      <BusinessBannerForm />
      <Footer />
    </main>
  );
}
