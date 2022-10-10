import styled from "styled-components";
import searchIcon from "../../img/icons/search.png";

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
  width: 80%;
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

export const ModalWindow = styled.div`
  display: none;

  &.open {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
  }
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 40%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #2f2f2f;
`;

export const ModalTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.7rem;
  margin: 30px 0 20px;
  color: #2f2f2f;
`;

export const SearchFood = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  padding-left: 5px;
  font-size: 0.9rem;
  letter-spacing: 1.2px;
  color: #2f2f2f;
`;

export const SearchList = styled.ul`
  margin-top: 25px;
  list-style: none;
  width: 100%;
  height: 450px;
  overflow-y: scroll;
`;

export const SearchProduct = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  margin: 0 30px 10px;

  &.hide {
    display: none;
  }
`;

export const CheckBox = styled.input``;

export const LabelSearch = styled.label`
  display: block;
  position: relative;
  padding-left: 28px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 21px;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & .checkbox:checked ~ .checkmark {
    background-color: #52b788;
  }

  & .checkbox:checked ~ .checkmark:after {
    display: block;
  }

  & .checkmark:after {
    left: 5px;
    top: 0px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 18px;
  width: 18px;
  border: 1px solid #52b788;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.span`
  margin-left: 2px;
  width: 24px;
  height: 24px;
  user-select: none;
  background: url(${searchIcon}) no-repeat center;
  transform: scale(0.75) scaleX(-1);
`;

export const SaveButton = styled(AddProduct)`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 500;
`;
