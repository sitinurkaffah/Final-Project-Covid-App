import styled from "styled-components";

// Membuat Styled Component Movie
const StyledRegional = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

h2 {
    text-align: center;
    color: #06D6A0;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
}

p {
    text-align: center;
    color: #118AB2;
    font-size: 18px;
    margin-bottom: 16px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
}

.detail-regional {
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  margin: 0 40px 20px;
}


/* Medium Screen */
@media (max-width: 768px) { 
    .container {
        flex-direction: column;
    align-items: center;
    }
    

}

/* Large Screen */
@media (min-width: 992px) {
/*
 * Nothing TODO Here.
 * We dont change style hello. 
 */
}
`;

export default StyledRegional;