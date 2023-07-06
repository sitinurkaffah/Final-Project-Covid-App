import StyledProvinces from "./ProvincesStyled";
import Table from "../Table/Table";

function Provinces(props) {
  const {dataProvinsi} = props
  return (
    <StyledProvinces>
    <div>
      <section>
        <div>
          <h2>
            Provinsi
          </h2>
          <p>
            Data Covid Berdasarkan Provinsi
          </p>
        </div>
        <div className="overflow">
          <table>
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
    </StyledProvinces>
  );
}

export default Provinces;
