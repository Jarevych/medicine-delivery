import styled from 'styled-components';


export const HeaderStyled = styled.div`
 max-width: 1440px; 
   margin: 0 auto;
    display: flex;
   justify-content: center;
   gap: 50px;
   padding: 20px;
   background-color: #06da61;
   border-bottom-right-radius: 12px;
   border-bottom-left-radius: 12px;
   margin-bottom: 20px;
a {
    text-decoration: none;
    display: flex;
    font-size: 24px;
    color: #FFF;
    font-weight: 700;

}
a:hover {
    text-decoration: underline;
}
a:focus {
    text-decoration: underline;
}
a is-active {
    text-decoration: underline;
}

    /* ul {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 20px;
    }
    li {
        list-style: none;
        max-width: 200px;
        padding: 15px;
    } */
`