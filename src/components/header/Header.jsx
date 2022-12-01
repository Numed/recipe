import { Link } from "react-router-dom";
import styled from "styled-components";
import sun from "../../img/icons/sun.png";
import moon from "../../img/icons/moon.png";

const HeaderSection = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
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

const SliderContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #47a177;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #47a177;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #d9d9d9;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;

    &::before {
      border-radius: 50%;
    }
  }
`;

const Sun = styled.span`
  position: absolute;
  top: 50%;
  left: 88%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 32px;
  height: 32px;
  background: url(${sun}) no-repeat center;
`;

const Moon = styled.span`
  background: url(${moon}) no-repeat center !important;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 32px;
  height: 32px;
  left: 95.5%;
  filter: invert(96%) sepia(95%) saturate(7274%) hue-rotate(314deg)
    brightness(106%) contrast(111%);
`;

const Header = () => {
  const toggleSwitch = (target) => {
    if (target.classList.contains("active")) {
      document.body.classList.remove("dark");
      target.classList.remove("active");
    } else {
      document.body.classList.add("dark");
      target.classList.add("active");
    }
  };

  return (
    <HeaderSection>
      <NavSection className="nav-section">
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
          <Sun className="sun" />
          <SliderContainer className="switch">
            <Checkbox
              className="checkbox"
              type="checkbox"
              onChange={(e) => toggleSwitch(e.target)}
            />
            <Slider className="slider round" />
          </SliderContainer>
          <Moon className="moon" />
        </NavList>
      </NavSection>
    </HeaderSection>
  );
};

export default Header;
