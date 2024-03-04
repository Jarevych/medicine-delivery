import styled from 'styled-components';


export const ShoppingStyledContainer = styled.div`
 max-width: 1440px;
 margin: 0 auto;
   display: flex;
 justify-content: center;


    /* gap: 50px; */
    /* flex-direction: column; */
    /* align-items: center; */
    .list {
      max-width: 100%;
      display: flex;
      padding: 0;
      margin: 0;
    }
    ul {
      
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 0 auto;
        padding-left: 20px;
        margin-left: 40px;
        justify-content: stretch;
    }
    li {
        list-style: none;
       width: 200px;
        padding: 15px;
        position: relative;
    }
    button {
        display: flex;
        margin: 5px;
    width: 136px;
    height: 30px;
    border-radius: 12px;
    background-color: #3470ff;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.42;
    color: #fff;
    }
    .favor {
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: 0;
  }
`