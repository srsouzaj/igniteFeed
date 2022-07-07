import Logo from "../Assets/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo height={32} />
      <strong>Ignite Feed</strong>
    </header>
  );
};
