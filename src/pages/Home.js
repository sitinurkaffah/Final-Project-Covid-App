/* eslint-disable react-hooks/exhaustive-deps */
import Hello from "../components/Hello/Hello";
import axios from "axios";
import ENDPOINTS from "../utils/constants/endpoints";
import { useEffect } from "react";
import Global from "../components/Global/Global";
import { useDispatch } from "react-redux";
import { updateCovid } from "../features/covidSlice";
import Regional from "../components/Regional/Regional";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    getGlobal();
  },[]);

  async function getGlobal(){
    const response = await axios(ENDPOINTS.GLOBAL);
    const covid = response.data;

    dispatch(updateCovid(covid))

  }

  return (
    <>
      <Hello />
      <Global />
      <Regional />
    </>
  );
}

export default Home;
