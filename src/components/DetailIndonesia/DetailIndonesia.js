import StyledDetailIndo from "./DetailIndonesiaStyled";

function DetailIndo({detail_indo}) {
  const { status, total } = detail_indo;
  return (
    <StyledDetailIndo>
      <div>
        <h1>{status}</h1>
        <h2 className="type">{total}</h2>
      </div>
    </StyledDetailIndo>
  );
}

export default DetailIndo;
