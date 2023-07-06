import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

/**
 * Membuat Component Container.
 * Menggunakan Teknik Composition: children.
 */
function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}

export default Container;
