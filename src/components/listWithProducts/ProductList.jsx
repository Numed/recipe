import {
  Section,
  ListSection,
  ListContainer,
  ListTitle,
  List,
  Products,
  ProductName,
  DeleteButton,
  AddProduct,
  TextSection,
  TextContainer,
  TextTitle,
  TextSubtitle,
  ModalWindow,
  ModalContainer,
  CloseButton,
  ModalTitle,
  SearchFood,
  SearchList,
  SearchProduct,
  CheckBox,
  CheckMark,
  LabelSearch,
  SearchIcon,
  SearchHeader,
  SaveButton,
} from "./style";

import { useRef, useState, useEffect } from "react";

const ProductList = () => {
  const modalRef = useRef();
  const [productValue, setProductValue] = useState("");

  useEffect(() => {
    searchProduct();
    // eslint-disable-next-line
  }, [productValue]);

  const toggleModal = () => {
    modalRef.current.classList.contains("open")
      ? modalRef.current.classList.remove("open")
      : modalRef.current.classList.add("open");
  };

  const searchProduct = () => {
    const productNames = document.querySelectorAll(".search-product__name"),
      searchData = productValue.trim().toLowerCase();
    console.log(searchData);
    if (searchData !== "") {
      productNames.forEach((e) => {
        if (e.textContent.toLowerCase().search(searchData) === -1) {
          e.parentElement.parentElement.classList.add("hide");
        } else {
          e.parentElement.parentElement.classList.remove("hide");
        }
      });
    } else {
      productNames.forEach((e) => {
        e.parentElement.parentElement.classList.remove("hide");
      });
    }
  };

  return (
    <Section>
      <ListSection>
        <ListContainer className="list-container">
          <ListTitle>Products ingredients</ListTitle>
          <List className="list">
            <Products>
              <ProductName>Potato</ProductName>
              <DeleteButton>x</DeleteButton>
            </Products>
            <Products>
              <ProductName>Potato</ProductName>
              <DeleteButton>x</DeleteButton>
            </Products>
            <AddProduct onClick={toggleModal}>Add product</AddProduct>
          </List>
        </ListContainer>
      </ListSection>
      <TextSection>
        <TextContainer>
          <TextTitle>Just add products and choose recipe</TextTitle>
          <TextSubtitle>
            All you have to do is add to the list what you just bought at the
            store or what is in the fridge. We will select special recipes that
            contain products that are present in your home.
          </TextSubtitle>
        </TextContainer>
      </TextSection>
      <ModalWindow ref={modalRef}>
        <ModalContainer>
          <CloseButton onClick={toggleModal}>X</CloseButton>
          <ModalTitle>Choose a products</ModalTitle>
          <SearchHeader>
            <SearchFood
              type="search"
              placeholder="I have a/an "
              onChange={(e) => setProductValue(e.target.value)}
              value={productValue}
            />
            <SearchIcon />
          </SearchHeader>
          <SearchList>
            <SearchProduct>
              <LabelSearch className="container">
                <CheckBox type="checkbox" className="checkbox" />
                <CheckMark className="checkmark"></CheckMark>
                <ProductName className="search-product__name">
                  Carrot
                </ProductName>
              </LabelSearch>
            </SearchProduct>
          </SearchList>
          <SaveButton>Add 3 products</SaveButton>
        </ModalContainer>
      </ModalWindow>
    </Section>
  );
};

export default ProductList;
