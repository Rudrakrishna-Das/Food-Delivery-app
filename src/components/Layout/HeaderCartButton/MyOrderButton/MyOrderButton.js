import classes from "./MyOrderButton.module.css";

const MyOrderButton = (props) => {
  return (
    <button className={classes.my_order} onClick={props.onClick}>
      My Orders
    </button>
  );
};

export default MyOrderButton;
