import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface Commentinterface {
  content: string;
  avatar?: string;
  onDeleteComment: (content: string) => void;
}

export const Comment = ({ content, onDeleteComment }: Commentinterface) => {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={"https://github.com/srsouzaj.png"} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jorge de Souza</strong>
              <time
                title="06 de Julho de 2022 às 17h09min"
                dateTime="2022-07-06 17:09:32"
              >
                Há 01h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
