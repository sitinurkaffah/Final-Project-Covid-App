import styled from "styled-components";

const StyledGlobal = styled.div`
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
        justify-content: space-between;
        width: 100%;
        gap: 2rem;
    }

    .detail-global {
        flex: 1;
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

export default StyledGlobal;
