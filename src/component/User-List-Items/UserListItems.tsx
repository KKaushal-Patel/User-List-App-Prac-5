import styles from "./UserListItems.module.css";

const UserListItems = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles["container_inner"]}>
      <div className={styles.titles}>
        <div>Name</div>
        <div>Status</div>
        <div>Access</div>
        <div>Icon</div>
      </div>
      </div>
      <div className={styles.users}>
          <div></div>
          </div>
    </div>
  );
};

export default UserListItems;
