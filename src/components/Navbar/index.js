import react, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarCotainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLogoLink,
  NavLogoImg,
  ImgWrap,
  Select,
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import img1 from "../../images/logo.png";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [t, i18n] = useTranslation();

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [changeNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarCotainer>
            {/* <NavLogoLink to="/" onClick={toggleHome}> */}
            <ImgWrap>
              <NavLogoImg src={img1} alt="logo" to="/" onClick={toggleHome} />
            </ImgWrap>
            {/* iam$aeed
            </NavLogoImg> */}
            {/* </NavLogoLink> */}
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {t("aboutme")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id2"
                  exact="true"
                  offset={-80}
                >
                  {t("education")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="id3"
                  exact="true"
                  offset={-80}
                >
                  {t("projects")}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  smooth={true}
                  duration={500}
                  spy={true}
                  to="services"
                  exact="true"
                  offset={-80}
                >
                  {t("skills")}
                </NavLink>
              </NavItem>
              <NavBtn>
                <NavBtnLink to="/contact-me">Contact Me</NavBtnLink>
              </NavBtn>
              <Select>
                <option value="En" onClick={() => i18n.changeLanguage("en")}>
                  EN
                </option>
                <option onClick={() => i18n.changeLanguage("nl")} value="Nl">
                  NL
                </option>
              </Select>
            </NavMenu>
          </NavBarCotainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
