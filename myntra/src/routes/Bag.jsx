import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {

  const homeItems = useSelector((store) => store.items);
  const bagIds = useSelector((store) => store.bag);

  const filteredItems = homeItems.filter((item) => bagIds.includes(item.id));

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {filteredItems.length === 0 && <p> No items added to bag </p>}
            {filteredItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary items={filteredItems} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
