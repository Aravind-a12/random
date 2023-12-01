import Card from "@atoms/Card";
import styles from "./memberprofile.module.scss";
import Button from "@atoms/Button";

export default function Page() {
  return (
    <section className={styles.layout}>
      <div className={styles.member}>
        <div className={styles.header}>
          <h2>部員プロフィール</h2>
        </div>
        <Card>
          <div className={styles.textLayout}>
            <div className={styles.detailItem}>
              <div className={styles.textContent}>写真</div>
              <div className={styles.cardContent}>
                写真 <br />
                未設定
              </div>
            </div>
            <div className={styles.itemDetail}>
              <div className={styles.textContent}>部員名</div>
              <div className={styles.description}>部員名が入ります</div>
            </div>
            <div className={styles.itemDetail}>
              <div className={styles.textContent}>学科</div>
              <div className={styles.description}>学科が入ります</div>
            </div>
            <div className={styles.itemDetail}>
              <div className={styles.textContent}>学年</div>
              <div className={styles.description}>学年が入ります</div>
            </div>
            <div className={styles.itemDetail}>
              <div className={styles.textContent}>出身地</div>
              <div className={styles.description}>出身地が入ります</div>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.button}>
        <Button>プロフィールを編集する</Button>
        <Button>パスワードを変更する</Button>
      </div>
    </section>
  );
}
