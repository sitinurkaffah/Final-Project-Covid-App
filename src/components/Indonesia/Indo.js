import { useSelector } from "react-redux";
import StyledIndo from "./IndoStyled";
import DetailIndo from "../DetailIndonesia/DetailIndonesia";

function Indo() {
  const indonesia = useSelector((store) => store.covid.covid);
  const dataIndonesia = indonesia?.indonesia || [];

  return (
    <StyledIndo>
      <div>
        <div>
          <section>
            <h2>Indonesia Situation</h2>
            <p>Data Covid Berdasarkan Indonesia</p>
            <div className="container">
            {dataIndonesia.map((detail_indo, index) => (
                <DetailIndo key={index} detail_indo={detail_indo} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </StyledIndo>
  );
}

export default Indo;
