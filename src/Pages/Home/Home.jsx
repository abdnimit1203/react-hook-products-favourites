import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    const phonesdata = phones.products;
  return (
    <div>
      <div className="flex justify-center">
        <Banner></Banner>
      </div>
      <div>
        <Phones phones={phonesdata}></Phones>
      </div>
    </div>
  );
};

export default Home;
