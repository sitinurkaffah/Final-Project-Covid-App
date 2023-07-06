/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import Hello from "../../components/Hello/Hello";
import { useDispatch } from "react-redux";
import { updateCovid } from "../../features/covidSlice";
import Indo from "../../components/Indonesia/Indo";
import TableIndo from "../../components/TableIndo/TableIndo";

function Indonesia() {
  const dispatch = useDispatch();

  useEffect(() => {
    getIndonesia();
  },[]);

  async function getIndonesia(){
    const response = await axios(ENDPOINTS.INDONESIA);
    const covid = response.data;

    dispatch(updateCovid(covid))

  }

  return (
    <>
      <Hello />
      <Indo />
      <TableIndo />
    </>
  );
}

export default Indonesia;