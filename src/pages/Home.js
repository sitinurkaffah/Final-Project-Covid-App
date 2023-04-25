import Footer from "../components/Footer/Footer";
import Hello from "../components/Hello/Hello";
import Navbar from "../components/Navbar/Navbar";
import Global from "../components/Global/Global";
import AddForm from "../components/AddForm/AddForm";
import { useState } from "react";
import Provinces from "../components/Provinces/Provinces";
import data from "../utils/constants/provinces";

function Main() {
  const [dataProvinsi, setDataProvinsi] = useState(data.provinces);
  return (
    <main>
      {/* <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2> */}
      <Hello />
      <Global />
      <Provinces dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi} />
      <AddForm dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
