import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagIds = useSelector((state) => state.bag);

  const handleAdd = (id) => {
    if (!bagIds.includes(id)) dispatch(bagActions.addToBag(id));
  };

   const handleRemove = (id) => {
    if (bagIds.includes(id)) dispatch(bagActions.removeFromBag(id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {bagIds.includes(item.id) ? (
        <button className="btn-remove-bag" onClick={() => handleRemove(item.id)}>
          Remove from Bag
        </button>
      ) : (
        <button className="btn-add-bag" onClick={() => handleAdd(item.id)}>
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
