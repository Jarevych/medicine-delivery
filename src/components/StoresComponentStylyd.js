import styled from 'styled-components';

export const StoresStyled = styled.div`
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  display: flex;
  background-color: #9effb1;
  border-radius: 12px;
  padding: 20px;
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
  }
  li {
    list-style: none;
    /* max-width: 200px; */
    padding: 15px;
    cursor: pointer;
    border-radius: 8px;
    font-size: 20px;
    font-weight: 500;
    color: #3470ff;
    /* background-color: #c8b8e8; */
;
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
`;
