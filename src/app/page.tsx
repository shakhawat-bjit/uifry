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
import {
  buttons,
  logo,
  navLinks,
} from "../../public/assets/data/NavigationBar";

export default function Home() {
  return (
    <main className="parent-container">
      <NavigationBar navLinks={navLinks} logo={logo} buttons={buttons} />
      <Banner />
      <Clients />
      <Feature />
      <FeatureList />
      <Contact />
      {/* <Updates />
      <Business />
      <FeatureList />
      <Faq />
      <Footer /> */}
    </main>
  );
}
