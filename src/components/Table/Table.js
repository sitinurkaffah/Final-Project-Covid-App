function Table(props) {
    const {dataProvinsi, index} = props;
    return(
      <tr>
        <td>{index}</td>
        <td>{dataProvinsi.kota}</td>
        <td>{dataProvinsi.kasus}</td>
        <td>{dataProvinsi.sembuh}</td>
        <td>{dataProvinsi.dirawat}</td>
        <td>{dataProvinsi.meninggal}</td>
      </tr>
    );
  }
  
export default Table;