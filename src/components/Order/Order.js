import classes from "./Order.module.css";

const Order = (props) => {
  const closeOrderWindow = () => {
    props.onClick();
  };

  return (
    <div className={classes.order}>
      <div>
        <h1>ORDER SUCCESSFUL</h1>
        <p>
          Thank You For Your ORDER{" "}
          <span className={classes.user}>{props.onUserName.toUpperCase()}</span>
          . It is on your way.
        </p>
        <h3>ENJOY YOUR MEAL!</h3>
      </div>
      <button className={classes.close} onClick={closeOrderWindow}>
        Close
      </button>
    </div>
  );
};

export default Order;
