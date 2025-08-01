import { Outlet, useNavigation } from "react-router-dom";
import "../App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";


function App() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading"

  return (
    <>
      <Header />
      {isLoading ? <Loader/> : <Outlet/>}
      {!isLoading && <Footer />}
    </>
  );
}

export default App;
