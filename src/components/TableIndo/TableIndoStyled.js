import styled from "styled-components";

// Membuat Styled Component Movie
const StyledTableIndo = styled.div`
    margin: 3rem auto;
    padding: 1rem;
    
    h2 {
    text-align: center;
    color: #06d6a0;
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    }
    
    p {
    text-align: center;
    color: #118AB2;
    font-size: 18px;
    margin-bottom: 16px;
    }  
    
    table {
    border-spacing: 0px;
    border-top: 1px solid black;
    border-left: 1px solid black;
    overflow: hidden;
    white-space: nowrap;
    }

    .overflow {
    overflow-x: scroll;
    overflow-y: auto;
    }
    
    table {
    width: 100%;
    border-collapse: collapse;
    margin: 0.5rem 0;
    }


    th,
    td {
    padding: 0.25rem;
    text-align: center;
    border: 1px solid #ccc;
    }  
    
    th {
    font-weight: bold;
    background-color: #f2f2f2;
    color: #06d6a0;
    }

 /* Large Screen */
    @media screen and (min-width: 992px) {
    max-width: 960px; 
    }
    
    .provinces__container {
    margin-top: 2rem; 
    }
    
    th,
    td {
    padding: 0.5rem;
    }

  /* Medium Screen */
    @media screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 720px; 
    }
    
    h2 {
    font-size: 2.5rem; 
    }
    
    p {
    font-size: 1.2rem; 
    }
    
    .provinces__container {
    margin-top: 1rem; 
    }
    
    th,
    td {
    padding: 0.3rem; 
    }
`;

export default StyledTableIndo;