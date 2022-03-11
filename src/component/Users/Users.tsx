import styles from "./Users.module.css";
// import Dummy_userList from "../../Dummy_userList";
import img from "../../img/dhaval.jpeg";
import { Lock } from "react-feather";
import { Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { UserInterface } from "../../Interface";

const Users = (props: UserInterface) => {
  const dispatch = useDispatch();

  const HoverHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className={styles.users}>
      <div
        className={styles.col1}
        onMouseOver={HoverHandler}
        onMouseOut={HoverHandler}
      >
        <img src={img} alt="" />
        <div className={styles.nameEmail}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.email}>{props.email}</p>
        </div>
      </div>
      <div className={styles["status_dropdown"]}>
        {props.isActive && <p style={{color: "green"}}>Active</p>}
        {!props.isActive && (
          <div className="dropdown">
            <select className={styles.select}>
              {!props.isActive && (
                <>
                  <option> Inactive</option>    
                  <option> Active</option>
                </>
              )}
            </select>       
          </div>
        )}
      </div>
      <div className={styles["access_dropdown"]}>
        {props.isOwner && <p>Owner</p>}
        {!props.isOwner && (
          <div className="dropdown">
            <select className={styles.select}>
              <option> Manager</option>
              <option> Read</option>
            </select>
          </div>
        )}
      </div>
      {props.isOwner && (
        <div className={styles.icon}>
          <Lock />
        </div>
      )}
      {!props.isOwner && (
        <div className={styles.icon}>
          <Trash2 />
        </div>
      )}
    </div>
  );
};

export default Users;
