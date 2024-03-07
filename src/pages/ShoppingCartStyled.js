import styled from 'styled-components';

export const ShoppingStyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  .list {
    padding: 0;
    margin: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: 0 auto;
    padding-left: 20px;
    margin-left: 40px;
    justify-content: stretch;
  }
  li {
    color: #3470ff;

    list-style: none;
    /* height: 200px; */
    display: flex;
    flex-direction: column;
    text-align: center;
    /* align-items: center; */
    /* width: 150px; */
    padding: 15px;
    position: relative;
    border: 2px solid #aaef9f;
    border-radius: 8px;
  }
  .price {
    display: flex;
    justify-content: space-between;
  }
  .quantity {
    max-width: 30px;
    text-align: center;
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
  .left-side {
    display: flex;
    flex-direction: column;
  }
`;
