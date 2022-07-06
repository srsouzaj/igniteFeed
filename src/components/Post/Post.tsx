import styles from "./Post.module.css";

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/srsouzaj.png"
          />
          <div className={styles.authorInfo}>
            <strong>Jorge de Souza</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time
          title="06 de Julho de 2022 às 17h09min"
          dateTime="2022-07-06 17:09:32"
        >
          Publicado há 01h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>
    </article>
  );
};
