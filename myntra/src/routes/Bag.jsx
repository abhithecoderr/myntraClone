import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
            <BagItem />
          </div>
          <div class="bag-summary">
            <BagSummary/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
