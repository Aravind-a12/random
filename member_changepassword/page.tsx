import Card from "@atoms/Card";
import Input from "@atoms/Input";
import styles from "./memberpassword.module.scss";
import Button from "@atoms/Button";

export default function Page() {
  return (
    <section className={styles.member}>
      <div className={styles.header}>
        <h2>パスワード変更</h2>
      </div>
      <Card>
        <Input label="現在のパスワードを入力してください" type="password" />
        <Input label="新しいパスワードを入力してください" type="password" />
        <Button>ログイン</Button>
        <Button variant="faded">キャンセルして戻る</Button>
      </Card>
    </section>
  );
}
