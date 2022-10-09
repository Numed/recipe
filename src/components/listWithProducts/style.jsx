import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const ListSection = styled.div`
  width: 33.3%;
`;

export const ListContainer = styled.div`
  width: 90%;
  height: 500px;
  position: relative;
  box-shadow: 0px 0px 9px 4px rgba(47, 47, 47, 0.5);
`;

export const ListTitle = styled.h3`
  color: #fff;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 1.2px;
  margin: 0 0 15px;
  text-align: center;
  background-color: #52b788;
  padding: 12px 16px;
`;

export const List = styled.ol`
  padding: 10px 20px;
  &.overflow {
    overflow-y: scroll;
  }
`;

export const Products = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px;
  border-bottom: 2px solid #d9d9d9;
`;

export const ProductName = styled.span`
  font-size: 16px;
  color: #2f2f2f;
  font-weight: 500;
  letter-spacing: 1.2px;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  color: #e63946;
  font-size: 18px;
  font-weight: 600;
`;

export const AddProduct = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 6px 24px;
  background-color: #52b788;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    transition: all 0.2s linear;
    background-color: #47a177;
  }
`;

export const TextSection = styled.div`
  margin-left: 40px;
  width: 33.3%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const TextTitle = styled.h2`
  color: #52b788;
  font-weight: 700;
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  margin-bottom: 5px;
`;

export const TextSubtitle = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  color: #2f2f2f;
  line-height: 1.8rem;
`;
