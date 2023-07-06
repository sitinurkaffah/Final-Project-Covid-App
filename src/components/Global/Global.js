import { useSelector } from "react-redux";
import DetailGlobal from "../DetailGlobal/DetailGlobal";
import StyledGlobal from "./GlobalStyled";

function Global() {
  const global = useSelector((store) => store.covid.covid);
  const dataGlobal = global?.global || [];

  return (
    <StyledGlobal>
      <div>
        <div>
          <section>
            <h2>Global Situation</h2>
            <p>Data Covid Berdasarkan Global</p>
            <div className="container">
            {dataGlobal.map((detail_global, index) => (
                <DetailGlobal key={index} detail_global={detail_global} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </StyledGlobal>
  );
}

export default Global;
