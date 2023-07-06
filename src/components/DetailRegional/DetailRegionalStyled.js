import styled from "styled-components";

const StyledDetailRegional = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 9px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  gap: 1rem;
  margin: 1rem;

  .item {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .data-item {
    display: flex;
  }

  .info {
    display: flex;
  }

  .img {
    margin-left: auto;
    justify-content: baseline;
  }

  .confirmed {
    color: #06d6a0;
  }

  .recovered {
    color: #118ab2;
  }

  .death {
    color: #ef476f;
  }

  img {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 80%;

    .item {
      display: flex;
      flex-wrap: wrap;
    }

  }
  @media screen and (min-width: 992px) {
    width: 30%;

    h2 {
      font-size: 1.6rem;
    }

    h3 {
    font-size: 1.3rem;
    }

    h4 {
      font-size: 1.3rem;
    }

    .item {
      display: flex;
      flex-wrap: wrap;
    }

    .data-item >div >h3 {
      text-align: left;
    }
    
  }
`;

export default StyledDetailRegional;
