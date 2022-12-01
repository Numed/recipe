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

import useService from "../../services/ApiService";

import { useRef, useState, useEffect } from "react";

const ProductList = () => {
  const modalRef = useRef();
  const [productValue, setProductValue] = useState("");

  const { getAllIngridents } = useService();

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    searchProduct();
    // eslint-disable-next-line
  }, [productValue]);

  const onRequest = () => {
    getAllIngridents().then((el) => console.log(el));
  };

  const toggleModal = () => {
    modalRef.current.classList.contains("open")
      ? modalRef.current.classList.remove("open")
      : modalRef.current.classList.add("open");
  };

  const searchProduct = () => {
    const productNames = document.querySelectorAll(".search-product__name"),
      searchData = productValue.trim().toLowerCase();
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
          <ListTitle className="list-title">Products ingredients</ListTitle>
          <List className="list">
            <Products>
              <ProductName className="product-name">Potato</ProductName>
              <DeleteButton>x</DeleteButton>
            </Products>
            <Products>
              <ProductName className="product-name">Potato</ProductName>
              <DeleteButton>x</DeleteButton>
            </Products>
            <AddProduct className="button" onClick={toggleModal}>
              Add product
            </AddProduct>
          </List>
        </ListContainer>
      </ListSection>
      <TextSection>
        <TextContainer>
          <TextTitle>Just add products and choose recipe</TextTitle>
          <TextSubtitle className="text-subtitle">
            All you have to do is add to the list what you just bought at the
            store or what is in the fridge. We will select special recipes that
            contain products that are present in your home.
          </TextSubtitle>
        </TextContainer>
      </TextSection>
      <ModalWindow ref={modalRef}>
        <ModalContainer className="modal-window">
          <CloseButton className="close-button" onClick={toggleModal}>
            X
          </CloseButton>
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
