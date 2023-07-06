import styled from "styled-components";

// Membuat Styled Component Movie
const StyledHello = styled.div`
  margin: 1rem;

section {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.left {
  margin-bottom: 1rem;
}

h2 {
  color: #06D6A0;
  margin-bottom: 1rem;
  font-size: 2.44rem;
}

h3 {
  color: #118AB2;
  margin-bottom: 1rem;
  font-size: 1.59rem;
}

p {
  color: #64748b;
  margin-bottom: 1rem;
}

.button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #06D6A0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

img{
  width: 100%; 
  max-height: 400px; 
  object-fit: cover; 
  border-radius: 10px; 
}

/* Medium Screen */
@media (min-width: 768px) {
/*
* Nothing TODO Here.
* We dont change style hello.
*/
}

/* Large Screen */
@media (min-width: 992px) {
  max-width: 1200px;
  margin: 3rem auto;

section {
  margin: 0 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.left {
  flex-basis: 40%;
}

.right {
  flex-basis: 60%;
}
}
`;

export default StyledHello;