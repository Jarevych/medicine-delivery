import styled from 'styled-components';

export const OrderStyled = styled.div`
  /* max-width: 1440px;
  margin: 0 auto; */
  display: flex;
  /* justify-content: center; */
  gap: 50px;
  /* max-width: 1000px; */
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    /* width: 400px; */
  }
  .input {
    width: 250px;
    height: 30px;
    border-radius: 8px;
    font-size: 18px;
    line-height: 1.2;
  }
  ul {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
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
`;
