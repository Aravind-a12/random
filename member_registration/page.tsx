import Card from "@atoms/Card";
import Input from "@atoms/Input";
import styles from "./memberregistration.module.scss";
import Link from "next/link";
import Button from "@atoms/Button";

export default function Page() {
  return (
    <section className={styles.register}>
      <div className={styles.header}>
        <h2>部員プロフィール編集</h2>
      </div>
      <Card>
        <Input label="部員名" />
        <Input label="学科" />
        <Input label="学年" />
        <Input label="出身地" />
        <Button>入力した内容で確認</Button>
        <Button variant="faded">キャンセルして戻る</Button>
      </Card>
    </section>
  );
}
