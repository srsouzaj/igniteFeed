import styles from "./Sidebar.module.css";
import BackgroundUser from "../Assets/background.jpg";

import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={BackgroundUser} alt="background" />

      <div className={styles.profile}>
        <Avatar src={"https://github.com/srsouzaj.png"} />

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
