import { price } from "./data";
import Hello from "./hello";
import CartItem from "../components/Cart/CartItem";
import BaseBtn from "../components/Base/BaseBtn";

export default function Cart() {
  let shopplingBasket = ["Tomatoes", "Pasta"];
  let banner = ["현대카드 행사중", "롯데카드 할인 행사"];

  const renderHello = () => {
    return banner.map((cV, i) => {
      return <Hello message={cV} key={i} />;
    });
  };
  const renderCartItem = () => {
    return shopplingBasket.map((cV, i) => {
      return <CartItem productName={cV} price={price} key={i} />;
    });
  };

  return (
    <div>
      {renderHello()}
      <h4 className='title'>Cart</h4>
      {renderCartItem()}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <BaseBtn backgroundColor='red' message='확인' />
      </div>
    </div>
  );
}
