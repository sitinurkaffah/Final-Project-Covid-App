import { useState } from "react";
import styles from "./AddForm.module.css";
import Alert from "../Alert/Alert";

function AddForm(props) {
  const { dataProvinsi, setDataProvinsi } = props;

  const [provinsi, setProvinsi] = useState("");
  const [isProvinsiError, setIsProvinsiError] = useState(false);
  const [status, setStatus] = useState("");
  const [isStatusError, setIsStatusError] = useState(false);
  const [jumlah, setJumlah] = useState("");
  const [isJumlahError, setIsJumlahError] = useState(false);

  function handleInputProvinsi(event) {
    setProvinsi(event.target.value);
  }

  function handleInputStatus(event) {
    setStatus(event.target.value);
  }

  function handleInputJumlah(event) {
    setJumlah(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (provinsi === "") {
      setIsProvinsiError(true);
      return;
    } else if (status === "") {
      setIsStatusError(true);
      return;
    } else if (jumlah === "") {
      setIsJumlahError(true);
      return;
    } else {
      let updatedDataProvinsi = dataProvinsi.map((data) => ({ ...data }));
      const dataToUpdate = updatedDataProvinsi.find(
        (data) => data.kota === provinsi
      );

      if (dataToUpdate) {
        if (status === "Kasus") {
          dataToUpdate.kasus += Number(jumlah);
        } else if (status === "Sembuh") {
          dataToUpdate.sembuh += Number(jumlah);
        } else if (status === "Meninggal") {
          dataToUpdate.meninggal += Number(jumlah);
        } else if (status === "Dirawat") {
          dataToUpdate.dirawat += Number(jumlah);
        }
      }

      setIsProvinsiError(false);
      setIsJumlahError(false);
      setIsStatusError(false);
      setDataProvinsi(updatedDataProvinsi);

      setProvinsi("");
      setJumlah("");
      setStatus("");
    }
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.form__image}
        src={`${process.env.PUBLIC_URL}/image1.png`}
        alt=""
      />
      <form className={styles.form}>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Form Covid</h2>
          <div className={styles.form__control}>
            <label htmlFor="provinsi">Provinsi</label>
            <select
              id="provinsi"
              className={styles.form__input}
              value={provinsi}
              onChange={handleInputProvinsi}
            >
              <option value="">-- Pilih Provinsi --</option>
                            {dataProvinsi.map((province) => (
                            <option key={province.id} value={province.kota}>
                                {province.kota}
                                </option>
                                ))}
                        </select>
                        {isProvinsiError && <Alert>Wajib Memilih Provinsi!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="">Status</label>
                        <select className={styles.form__input} 
                        value={status}
                        onChange={handleInputStatus}
                        >
                        <option value="">-- Pilih Status --</option>
                        <option value="Kasus">Positif</option>
                        <option value="Sembuh">Sembuh</option>
                        <option value="Dirawat">Dirawat</option>
                        <option value="Meninggal">Meninggal</option>
                        </select>
                        {isStatusError && <Alert>Wajib Memilih Status!</Alert>}
                    </div>

                    <div className={styles.form__control}>
                        <label htmlFor="">Jumlah</label>
                        <input type="text" className={styles.form__input} 
                        value={jumlah} 
                        onChange={handleInputJumlah} />
                        {isJumlahError ? <Alert>Jumlah Wajib Diisi!</Alert> : ""}
                    </div>
            <button onClick={handleSubmit} className={styles.form__button}>Submit</button>
        </div>
    </form>
</div>
);
}

export default AddForm;