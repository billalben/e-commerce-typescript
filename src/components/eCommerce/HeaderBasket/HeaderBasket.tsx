import { useEffect, useState } from "react";
import { useAppSelector } from "@store/hooks";
import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);

  useEffect(() => {
    if (!totalQuantity) return;

    setIsAnimate(true);

    const debounce = setTimeout(() => setIsAnimate(false), 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  const quantityStyle = `${styles.basketQuantity} ${
    isAnimate ? styles.pumpCartQuantity : ""
  }`;

  return (
    <div className={styles.basketContainer}>
      <div className={styles.basketCart}>
        <Logo title="basket icon" />
        <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
};

export default HeaderBasket;
