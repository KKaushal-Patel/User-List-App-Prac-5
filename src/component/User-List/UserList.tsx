import HoverCard from "../HoverCard/HoverCard";
import styles from "./UserList.module.css";

const UserList = () => {
  return (
    <>
      <div className={styles["hero_user_list"]}>
        <HoverCard />
      </div>
    </>
  );
};

export default UserList;
