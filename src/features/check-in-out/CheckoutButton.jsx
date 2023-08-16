/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingID }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      $size="small"
      onClick={() => checkout(bookingID)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
