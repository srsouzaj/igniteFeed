import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { format } from "date-fns";
import styles from "./Post.module.css";

interface PostInterface {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content?: Array<{ type: string; content: string }>;
  publishedAt: Date | number;
}

export const Post = ({ author, publishedAt, content }: PostInterface) => {
  // const publishedDateFormmated = format(
  //   publishedAt,
  //   "d 'de' LLLL 'às' HH:mm'h'"
  // );

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
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
        <p>ahhhhhh</p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};
