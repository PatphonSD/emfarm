import clsx from "clsx";
import styles from "./hero.module.css";
import Container from "@/components/container";

export default function Hero() {
  return (
    <div className="h-48 relative p-4 flex items-center md:h-64 bg-neutral-800">
      <div className={styles.lines}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <Container>
        <h1 className="text-white text-4xl md:text-5xl font-medium">
          ผลิตภัณฑ์ของผม
        </h1>
      </Container>
    </div>
  );
}
