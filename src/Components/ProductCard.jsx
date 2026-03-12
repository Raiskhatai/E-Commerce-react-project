import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useCartValue } from "../ContextApi/CartApi";

const ProductCard = ({ item, idx }) => {
  const navigate = useNavigate();
  const { cartIncrease } = useCartValue();

  return (
    <div
      className={`shadow-lg flex justify-between flex-col gap-2 items-center hover:scale-105 transition-all hover:shadow-gray-500 w-50 rounded-3xl`}
      key={idx}
    >
      <img
        src={item.images}
        alt=""
        className="bg-cover w-30 cursor-pointer  "
        onClick={() => {
          navigate(`/product/${item.id}`);
        }}
      />
      <p className="text-center font-bold">{item.title}</p>
      <p className="text-center font-bold">{item.brand}</p>
      <p className="text-center font-bold">${item.price}</p>
      <button
        onClick={() => {
          cartIncrease(item);
        }}
        className="flex items-center bg-red-500 text-white rounded-md  hover:scale-105 mb-2 cursor-pointer font-semibold py-2 px-3 capitalize "
      >
        <FiShoppingCart className=" mr-3 text-xl " />
        <h1 className="text-sm">add to cart</h1>
      </button>
    </div>
  );
};

export default ProductCard;
