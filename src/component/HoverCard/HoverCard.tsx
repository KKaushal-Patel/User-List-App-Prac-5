import styles from "./HoverCard.module.css";
import img from "../../img/download.jpeg";

const HoverCard = () => {
  return (
    <div className={styles["hero_main_card"]}>
      <div className={styles["card_inner"]}>
        <div className={styles.CardHeader}>
          <img src={img} alt="img" />
          <h2>Leon Hunt</h2>
          <p>dfhdjhfd@jfjdk.biz</p>
          <h2>Your Plan: Standard</h2>
          <button className={styles["btn_active_user"]}>Active User</button>
        </div>
        <div className={styles.planUser}>
          <label>Plan Uses</label>
          <meter id="file" value="32" max="100">
            32%
          </meter>
        </div>
        <div className={styles.numberData}>
          <div className={styles.dataLeft}>
            <h2>2,450</h2>
            <p>Clicks Reviewed</p>
          </div>
          <div className={styles.middle_bar}></div>
          <div className={styles.dataRight}>
            <h2>5000</h2>
            <p>Monthly Clicks</p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
