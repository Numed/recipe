import styled from "styled-components";
import iconImg from "../../img/icons/list.png";

const HeaderSection = styled.header`
  width: 100%;
  height: 100%;
  margin: 20px 0;
`;

const HeaderLogo = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #52b788;
  font-size: 1.75rem;
  line-height: 2.5rem;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Logo = styled.span`
  width: 32px;
  height: 32px;
  user-select: none;
  background: url(${iconImg}) no-repeat center;
  transform: scaleX(-1);
  filter: invert(63%) sepia(5%) saturate(3345%) hue-rotate(100deg)
    brightness(99%) contrast(92%);
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
      <HeaderLogo href="/">
        <Logo />
        Recipe
      </HeaderLogo>
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
