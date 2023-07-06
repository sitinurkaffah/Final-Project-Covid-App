import React from "react";
import { useSelector } from "react-redux";
import DetailTable from "../DetailTableInd/DetailTableInd";
import StyledTableIndo from "./TableIndoStyled";

function TableIndo() {
  const indonesia = useSelector((store) => store.covid.covid);
  const dataIndo = indonesia?.regions || [];
  
  return (
    <StyledTableIndo>
      <div>
        <section>
          <div>
            <h2>Situation by Provinces</h2>
            <p>Data Covid Berdasarkan Provinsi</p>
          </div>
          <div className="overflow">
            <table>
              <thead>
                <tr>
                  <th>Nama Kota</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Treatment</th>
                  <th>Death</th>
                </tr>
              </thead>
              <tbody>
                {dataIndo.map((detail_table, index) => (
                  <DetailTable key={index} detail_table={detail_table} index={index + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </StyledTableIndo>
  );
}

export default TableIndo;
