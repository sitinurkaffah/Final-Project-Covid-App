import { useState } from "react";
import AddForm from "../../components/AddForm/AddForm";
import Hello from "../../components/Hello/Hello";
import Provinces from "../../components/Provinces/Provinces";
import data from "../../utils/constants/provinces";

function Provinsi () {
    const [dataProvinsi, setDataProvinsi] = useState(data.provinces)
    return (
        <>
        <Hello />
        <Provinces dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi}/>
        <AddForm dataProvinsi={dataProvinsi} setDataProvinsi={setDataProvinsi}/>
        </>
    )
};

export default Provinsi;