import styled from "styled-components";
import iconImg from "../../img/logo.png";

const HeaderSection = styled.header`
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

const HeaderLogo = styled.a`
  width: 135px;
  height: 50px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px;
  background: url(${iconImg}) no-repeat center;
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
  justify-content: center;
`;

const LinkSection = styled.a`
  text-decoration: none;
  color: #2f2f2f;
  font-size: 1.1rem;
  letter-spacing: 1.1px;
  font-weight: 500;
  padding: 4px 8px;
  cursor: pointer;
  margin-left: 30px;

  &.active {
    background-color: #52b788;
    color: #fff;
  }

  &:hover {
    transition: all 0.2s linear;
    background-color: #52b788;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <HeaderLogo href="/" />
      <NavSection>
        <NavList>
          <LinkSection className="active" href="/recipes">
            Recipes
          </LinkSection>
          <LinkSection href="/blogs">Blogs</LinkSection>
          <LinkSection href="/contacts">Contact us</LinkSection>
        </NavList>
      </NavSection>
    </HeaderSection>
  );
};

export default Header;
