import styled from 'styled-components';

export const StoresStyled = styled.div`
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  display: flex;
  border: 1px solid black;

  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
  }
  li {
    list-style: none;
    max-width: 200px;
    padding: 15px;
    cursor: pointer;
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
