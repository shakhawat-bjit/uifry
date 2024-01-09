import Image from "next/image";
// import styles from './page.module.scss'
import "./page.scss";
import NavigationBar from "@/components/NavigationBar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="parent-container">
      <NavigationBar />
      <Banner />
    </main>
  );
}
