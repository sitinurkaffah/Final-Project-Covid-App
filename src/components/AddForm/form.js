import styles from "./AddForm.module.css";
import { useState } from "react";
import Error from "../Error/Error";

function AddForm(props) {
  const { dataKasus, setDataKasus } = props;
  const [jumlah, setJumlah] = useState("");
  const [select, setSelect] = useState("");
  const [status, setStatus] = useState("");
  const [isJumlahError, setIsJumlahError] = useState(false);
  const [isStatusError, setIsStatusError] = useState(false);
  const [isSelectError, setIsSelectError] = useState(false);

  function handleInputJumlah(event) {
    setJumlah(event.target.value);
  }
  function handleInputSelect(event) {
    setSelect(event.target.value);
  }
  function handleInputStatus(event) {
    setStatus(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (select === "") {
      setIsSelectError(true);
    } else if (status === "") {
      setIsStatusError(true);
    } else if (jumlah === "") {
      setIsJumlahError(true);
    }

    const index = dataKasus.findIndex((item) => item.kota === select);
    const foundProvince = dataKasus.find((item) => item.kota === select);

    if (status === "kasus") {
      dataKasus[index] = {
        ...foundProvince,
        kasus: parseInt(foundProvince.kasus) + parseInt(jumlah),
      };
    } else if (status === "sembuh") {
      dataKasus[index] = {
        ...foundProvince,
        sembuh: parseInt(foundProvince.sembuh) + parseInt(jumlah),
      };
    } else if (status === "meninggal") {
      dataKasus[index] = {
        ...foundProvince,
        meninggal: parseInt(foundProvince.meninggal) + parseInt(jumlah),
      };
    } else if (status === "dirawat") {
      dataKasus[index] = {
        ...foundProvince,
        dirawat: parseInt(foundProvince.dirawat) + parseInt(jumlah),
      };
    }
    setDataKasus([...dataKasus]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.AddForm}>
        <div className={styles.AddForm__left}>
          <img className={styles.AddForm__gambar} src="undraw.png" alt="" />
        </div>
        <div className={styles.AddForm__right}>
          <form className={styles.AddForm__form}>
            <h2 className={styles.AddForm__title}>Form Covid </h2>

            <div className={styles.label}>
              <label htmlFor="type"> Provinsi </label>
              <select
                className={styles.label__select}
                value={select}
                onChange={handleInputSelect}
              >
                <option value="">Provinsi </option>
                {dataKasus.map((provinsi) => (
                  <option key={provinsi.kota} value={provinsi.kota}>
                    {provinsi.kota}{" "}
                  </option>
                ))}
              </select>

              {isSelectError ? <Error> Provinsi Wajib diisi </Error> : ""}
            </div>

            <div className={styles.label}>
              <label htmlFor="type"> Status </label>

              <select
                value={status}
                onChange={handleInputStatus}
                name=""
                id=""
                className={styles.label__select}
              >
                <option value="">Status</option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isStatusError ? <Error> Statusi Wajib diisi </Error> : ""}
            </div>
            <div>
              <label
                value={jumlah}
                onChange={handleInputJumlah}
                className={styles.label}
              >
                Jumlah
                <input className={styles.label__select} type="text" />
                {isJumlahError ? <Error> Jumlah Wajib diisi </Error> : ""}
              </label>
            </div>

            <button
              onClick={handleSubmit}
              className={styles.AddForm__button}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddForm;