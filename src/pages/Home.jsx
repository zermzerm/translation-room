import Content from "../components/Home/Content";
import Header from "../components/Home/Header";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Header />
      <Content />
    </div>
  );
}
