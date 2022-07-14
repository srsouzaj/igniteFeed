import { ThumbsUp, Trash } from "phosphor-react";
import React, { useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import styles from "./Comment.module.css";

interface Commentinterface {
  content: string;
  avatar?: string;
  onDeleteComment: (content: string) => void;
}

export const Comment = ({ content, onDeleteComment }: Commentinterface) => {
  const [likeCount, setLikeCount] = useState<number>(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
