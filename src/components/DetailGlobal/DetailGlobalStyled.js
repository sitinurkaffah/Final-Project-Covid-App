import styled from "styled-components";

const StyledDetailGlobal = styled.div`
    padding: 25px 0px;
    box-shadow: 0 2px 9px 1px rgba(0, 0, 0, 0.5);
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 150px;
    margin: 10px;

    h1 {
     text-align: center;
     font-size: 45px;
    }

    h2 {
     text-align: center;
     font-size: 20px;
    }

    :nth-child(1) .type {
        color: #06D6A0;
    }

    :nth-child(2) .type {
        color: #118AB2;
    }

    :nth-child(3) .type {
        color: #EF476F;
    }

    @media screen and (min-width: 768px) {   
        width: 300px;
        height: 150px;
    }

    @media screen and (min-width: 992px) {
        width: 300px;
        justify-content: center;
        text-align: center;
        padding-top: 1rem;
    }  

    h1 {
        line-height: 1rem;
    }

    h2 {
        line-height: 0.8;
    }
`;
export default StyledDetailGlobal;
