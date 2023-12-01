import Card from "@atoms/Card";
import styles from "./ChatlistItems.module.scss";
import Button from "@atoms/Button";
import Image from "next/image";
import ImageSrc from "../../assets/images/mer.svg";

export default function ChatListItem() {
  return (
    <div className={styles.layout}>
      <Image src={ImageSrc} alt="img" className={styles.img} />
      <div className={styles.textLayout}>
        <div className={styles.text}>
          企業名が入ります <span className={styles.text}>2023年12月12日</span>
        </div>
      </div>
    </div>
  );
}
