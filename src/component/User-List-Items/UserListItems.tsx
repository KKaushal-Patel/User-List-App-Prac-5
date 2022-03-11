import styles from "./UserListItems.module.css";
import Users from "../Users/Users";
import Dummy_userList from "../../Dummy_userList";

const UserListItems = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles["container_inner"]}>
        <div className={styles.titles}>
          <div>Name</div>
          <div>Status</div>
          <div>Access</div>
        </div>
        {Dummy_userList.map((user) => {
          return (
            <Users
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              isOwner={user.isOwner}
              isActive= {user.isActive}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserListItems;

/* 
{Dummy_userList.map((users) => {
              return (
                <>
                  <img src={img} alt="" />
                  <div className={styles.nameEmail}>
                    <p className={styles.para}>{users.name}</p>
                    <p className={styles.para}>{users.email}</p>
                  </div>
                </>
              );
            })}
*/
