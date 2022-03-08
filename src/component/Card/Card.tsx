import { ReactChild, ReactFragment } from "react";
import styles from "./Card.module.css";

const Card = (props: { children: ReactChild | ReactFragment }) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
