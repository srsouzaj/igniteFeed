import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import React from "react";

interface PostInterface {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content?: Array<{ type: string; content: string }>;
  publishedAt: Date;
}

export const Post = ({ author, publishedAt, content }: PostInterface) => {
  const [comments, setComments] = React.useState<Array<string>>([
    "Muito massa!",
    "Que delicinha!",
    "Voooa!",
  ]);
  const [newCommentText, setNewCommentText] = React.useState<string>("");

  //Functions
  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewComment() {
    setNewCommentText(event.target.value);
  }

  function onDeleteComment(comment: string) {
    console.log(`Deletar comentário ${comment}`);
  }

  //Format Dates
  const publishedDateFormmated = format(
    publishedAt,
    "d 'de' MMMM 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
          title={publishedDateFormmated}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content?.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form
        onSubmit={() => handleCreateNewComment()}
        className={styles.commentForm}
      >
        <strong>Deixe seu comentário</strong>

        <textarea
          placeholder="Deixe seu comentário"
          name="comment"
          value={newCommentText}
          onChange={() => handleNewComment()}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={onDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
