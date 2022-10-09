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
} from "./style";

const ProductList = () => {
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
            <AddProduct>Add product</AddProduct>
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
    </Section>
  );
};

export default ProductList;
