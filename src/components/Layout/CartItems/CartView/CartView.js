import classes from "./CartView.module.css";

const CartView = (props) => {
  return (
    <li className={classes.details}>
      <div>
        <h2 className={classes.name}>{props.name}</h2>
        <div className={classes.price_qty}>
          <span className={classes.price}>{props.price.toFixed(2)}</span>
          <span className={classes.quantity}>x {props.addToCart}</span>
        </div>
      </div>
      <div className={classes.items_action}>
        <button>
          <span className={classes.decrease} onClick={props.onRemove}>
            -
          </span>
        </button>
        <button>
          <span className={classes.increase} onClick={props.onAdd}>
            +
          </span>
        </button>
      </div>
    </li>
  );
};

export default CartView;
