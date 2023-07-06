import StyledDetailGlobal from "./DetailGlobalStyled";

function DetailGlobal({detail_global}) {
  const { status, total } = detail_global;
  return (
    <StyledDetailGlobal>
      <div>
        <h1>{status}</h1>
        <h2 className="type">{total}</h2>
      </div>
    </StyledDetailGlobal>
  );
}

export default DetailGlobal;
