function DetailTable({detail_table}) {
    const { name, numbers } = detail_table;
    
    return(
      <tr>
        <td>{name}</td>
        <td>{numbers.confirmed}</td>
        <td>{numbers.recovered}</td>
        <td>{numbers.treatment}</td>
        <td>{numbers.death}</td>
      </tr>
    );
  }
  
export default DetailTable;