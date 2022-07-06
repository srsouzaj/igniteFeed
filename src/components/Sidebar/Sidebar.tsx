import styles from "./Sidebar.module.css";
import BackgroundUser from "../Assets/background.jpg";

import { PencilLine } from "phosphor-react";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={BackgroundUser} alt="background" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/srsouzaj.png" />

        <strong>Jorge de Souza</strong>
        <span> Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
