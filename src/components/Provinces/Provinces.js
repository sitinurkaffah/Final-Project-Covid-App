import styles from "./Provinces.module.css";
import Table from "../Table/Table";

function Provinces(props) {
  const { dataProvinsi } = props;

  return (
    <div className={styles.container}>
      <section className={styles.provinces} id="provinsi">
        <div>
          <h2 className={styles.provinces__title}>
            Provinsi
          </h2>
          <p className={styles.provinces__subtitle}>
            Data Covid Berdasarkan Provinsi
          </p>
        </div>
        <div className={styles.provinces__overflow}>
          <table className={styles.provinces__table}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
            {dataProvinsi.map((province, index) => (
            <Table key={province.kota} dataProvinsi={province} index={index+1} />
            ))}
            </tbody>
        </table>
        </div>
      </section>
    </div>
  );
}

export default Provinces;
