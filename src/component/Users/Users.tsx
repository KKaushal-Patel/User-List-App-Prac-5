import styles from "./Users.module.css";
// import Dummy_userList from "../../Dummy_userList";
import img from "../../img/dhaval.jpeg";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Users = () => {
  const dispatch = useDispatch();

  const HoverHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <div className={styles.users}>
      <div className={styles.col1}>
        <img
          src={img}
          alt=""
          onMouseOver={HoverHandler}
          onMouseOut={HoverHandler}
        />
        <div className={styles.nameEmail}>
          <p className={styles.para}>Patricia Lebsack</p>
          <p className={styles.para}>Sincere@april.biz</p>
        </div>
      </div>
      <div className={styles["status_dropdown"]}>
        <div className="dropdown">
          <button
            className={`${styles["btn"]} btn dropdown-toggle`}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            value="In"
          >
            Inactive
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="/">
                Active
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["access_dropdown"]}>
        <div className="dropdown">
          <button
            className={`${styles["btn"]} btn dropdown-toggle`}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Owner
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="/">
                Manager
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/">
                Read
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.icon}>
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default Users;
