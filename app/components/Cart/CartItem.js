export default function CartItem({ productName, price }) {
  return (
    <div className='cart-item'>
      <p>{productName}</p>
      <p>${price}</p>
      <p>1개</p>
    </div>
  );
}
