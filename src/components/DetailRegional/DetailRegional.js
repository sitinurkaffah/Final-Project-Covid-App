import StyledDetailRegional from "./DetailRegionalStyled";

function DetailRegional({ detail_regional }) {
  const { name, numbers } = detail_regional;

  return (
    <StyledDetailRegional>
      <div className="item">
        <h1>{name}</h1>
        <div className="data">
          <div className="data-item">
            <div>
              <h3>Confirmed</h3>
              <div className="info">
              <h4 className="confirmed">{numbers.confirmed}</h4>
            <img src="confirm.png" alt="" />
            </div>
            </div>
          </div>
          <div className="data-item">
            <div>
              <h3>Recovered</h3>
              <div className="info">
              <h4 className="recovered">{numbers.recovered}</h4>
            <img src="recovered.png" alt="" />
            </div>
            </div>
          </div>
          <div className="data-item">
            <div>
              <h3>Death</h3>
              <div className="info">
              <h4 className="death">{numbers.death}</h4>
            <img src="death.png" alt="" />
          </div>
          </div>
          </div>
        </div>
      </div>
    </StyledDetailRegional>
  );
}

export default DetailRegional;
