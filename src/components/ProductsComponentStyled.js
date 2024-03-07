import styled from 'styled-components';


export const ProductsStyled = styled.div`
 max-width: 100%;

  /* margin: 0 auto; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
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
  top: 23px;
  right: 135px;
  background-color: transparent;
  fill: #000;
  border: 0;
  }
  `