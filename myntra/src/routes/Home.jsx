import { useDispatch, useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import { useNavigation } from "react-router-dom";

const Home = () => {
  const bagItems = useSelector(store=> store.bag)
  const items = useSelector((store) => store.items);
  console.log(bagItems);
  
  return (
    <>
      <main>
        
        <div className="items-container">
          {items.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
