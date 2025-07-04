import Content from "../components/Home/Content";
import Header from "../components/Home/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.Container}>
      <Header />
      <Content />
    </main>
  );
}
