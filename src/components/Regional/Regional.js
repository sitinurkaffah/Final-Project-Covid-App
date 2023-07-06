import { useSelector } from "react-redux";
import DetailRegional from "../DetailRegional/DetailRegional";
import StyledRegional from "./RegionalStyled";

function Regional() {
  const regions = useSelector((store) => store.covid.covid);
  const dataRegions = regions?.regions || [];

  return (
    <StyledRegional>
      <div>
        <div>
          <section>
            <h2>Situation by Regions</h2>
            <p>Bacaan Pilihan Covid</p>
            <div className="container">
            {dataRegions.map((detail_regional, index) => (
                <DetailRegional key={index} detail_regional={detail_regional} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </StyledRegional>
  );
}

export default Regional;
