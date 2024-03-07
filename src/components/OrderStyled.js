import styled from 'styled-components';

export const OrderStyled = styled.div`
  max-width: 350px; 
 
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: #9effb1;
  border-radius: 12px;
  padding: 20px;
  /* max-width: 1000px; */
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
    color: #3470ff;
  }
  .input {
    width: 300px;
    height: 30px;
    border-radius: 8px;
    font-size: 18px;
    line-height: 1.2;
    border: none;
    background-color: #dfffe3;
    padding: 5px;
  }
  .input-form {
    width: 310px;
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
