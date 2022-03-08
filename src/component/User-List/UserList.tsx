// import HoverCard from "../HoverCard/HoverCard";
// import styles from "./UserList.module.css";
import Card from "../Card/Card";
// import { useSelector, useDispatch } from "react-redux";
import UserListItems from "../User-List-Items/UserListItems";

// type hoverType = {
//   isHover: boolean;
// };

const UserList = () => {

  // const isHover = useSelector((state: hoverType) => state.isHover);
  // const dispatch = useDispatch();

  // const hoverHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  return (

    <>
      <Card>
        <UserListItems />
        {/* {isHover && <HoverCard />} */}
      </Card>
    </>
  );
};

export default UserList;
