import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
`;

const ErrorTitle = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 1.2px;
  color: #47a177;

  &:nth-child(2) {
    line-height: 2.5rem;
    margin-bottom: 20px;
  }
`;

const ErrorPage = () => {
  return (
    <Section>
      <ErrorTitle>Ooops.. </ErrorTitle>
      <ErrorTitle>something went wrong</ErrorTitle>
      <Link to="/" className="button-link">
        Back to home
      </Link>
    </Section>
  );
};

export default ErrorPage;
