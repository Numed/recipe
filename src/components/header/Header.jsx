import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderSection = styled.header`
  width: 100%;
  height: 100%;
`;

const NavSection = styled.nav`
  width: 100%;
  height: 100%;
  background-color: #efeeed;
  padding: 20px 0;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Header = () => {
  return (
    <HeaderSection>
      <NavSection>
        <NavList>
          <Link className="link-section active" to="/recipes">
            Recipes
          </Link>
          <Link className="link-section" to="/blogs">
            Blogs
          </Link>
          <Link className="header-logo" to="/" />
          <Link className="link-section" to="/contacts">
            Contact us
          </Link>
          <Link className="link-section" to="/themes">
            Theme
          </Link>
        </NavList>
      </NavSection>
    </HeaderSection>
  );
};

export default Header;
