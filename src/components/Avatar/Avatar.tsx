import styles from "./Avatar.module.css";

interface AvatarInterface {
  src: string;
  alt?: string;
  hasBorder?: boolean;
}

export const Avatar = ({ src, hasBorder = true }: AvatarInterface) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
};
