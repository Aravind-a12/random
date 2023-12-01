import Card from "@atoms/Card";
import Input from "@atoms/Input";
import styles from "./personalitytest.module.scss";
import Button from "@atoms/Button";
import Linkicon from "../../components/assets/icons/link_icon.svg";
import Image from "next/image";

export default function Page() {
  return (
    <section className={styles.completed}>
      <div className={styles.header}>
        <h2>性格診断</h2>
      </div>
      <div className={styles.button}>
        <Button>性格診断をアップロード</Button>
        <Button variant="outlined">
          性格診断を受ける
          <span className={styles.icon}>
            <Image src={Linkicon} alt={""} />
          </span>
        </Button>
      </div>
    </section>
  );
}
