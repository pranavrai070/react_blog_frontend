import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { BorderAll } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CreateIcon from "@mui/icons-material/Create";
import headerLogo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const scrollSmoothTo = (target) => {
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    setActiveSection((prevSection) => {
      return section;
    });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTop, setNavbarTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      // Scrolling down
      if (currentPosition > scrollPosition) {
        setNavbarTop(-100);
      } else {
        // Scrolling up
        setNavbarTop(0);
      }

      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const logout = async () => {
    sessionStorage.clear();
  };

  return (
    <>
      <Wrapper
        className="flexCenter animate whiteBg"
        id="navbar"
        style={{
          //   height: navbarTop === -100 ? "40px" : "80px",
          //   top: `${navbarTop}px`,
          transition: "top 0.3s ease-in-out",
          fontFamily: "Montserrat, sans-serif",
          // boxShadow: '0px 8px 37px 0px rgba(0, 0, 0, 0.18)'
        }}
      >
        <BorderBox>
          <NavInner className="containe flexSpaceCenter">
            <div
              className="pointer flexNullCenter"
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
            >
              <h1 style={{ marginLeft: "10px" }} className="font20 extraBold">
                <img
                  className={classes.navBarIMg}
                  src={headerLogo}
                  alt="logo"
                />
              </h1>
            </div>

            <div className={classes.group}>
              <svg className={classes.icon} aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input placeholder="Search" type="search" className={classes.input} />
            </div>

            <div className={classes.Humburger}>
              <HamburgerWrapper
                className="pointer"
                onClick={toggleSidebar}
                style={{ position: "absolute", top: ".8rem", right: "1.5rem" }}
              >
                <HamburgerMenu
                  isOpen={sidebarOpen}
                  menuClicked={toggleSidebar}
                  width={29}
                  height={21}
                  strokeWidth={5}
                  rotate={0}
                  color="linear-gradient(to right, #3A4DF5, #18BDE3)"
                  borderRadius={10}
                  animationDuration={0.3}
                />
              </HamburgerWrapper>
            </div>
            <UlWrapper
              className={`flexNullCenter ${sidebarOpen ? "open" : ""} `}
              style={{ listStyleType: "none", cursor: "pointer" }}
            >
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "solution" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color:
                    activeSection === "solution"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <div>
                  <CreateIcon />
                </div>
              </li>
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "blog" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color:
                    activeSection === "blog"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <div>
                  <NotificationsNoneIcon />
                </div>
              </li>
              <li
                className={`semiBold font15 pointer navLink ${
                  activeSection === "contact" ? "active" : ""
                }`}
                style={{
                  cursor: "pointer",
                  marginRight: "1rem",
                  color:
                    activeSection === "contact"
                      ? "rgba(0, 0, 0, 1)"
                      : " rgba(79, 79, 79, 1)",
                }}
              >
                <div>
                  <div className="-translate-y-1">
                    <img
                      src={
                        "https://lh3.googleusercontent.com/a/ACg8ocLFsilZP3Xj-5H2vgLPkaetKtyAM2uQihDHhR2P1bzuCKLaLICD=s432-c-no"
                      }
                      alt="profile-pic"
                      className="w-8 rounded-full"
                    />
                  </div>
                </div>
              </li>
            </UlWrapper>
          </NavInner>
        </BorderBox>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  border: none;
`;

const BorderBox = styled.div`
  width: 100%;
  ${"" /* max-width: 3840px; */}
  height: 55px;
  box-sizing: border-box;
  background: white;
  // backdrop-filter: blur(10px);
  box-shadow: 0px 8px 37px 0px rgba(0, 0, 0, 0.18);

  @media (max-width: 760px) {
    /* Adjust the size for small screen phones */
    height: 65px;
    padding: 10px;
    width: 100%;
  }
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;

const HamburgerWrapper = styled.div`
  @media (min-width: 760px) {
    display: none;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  height:1rem;
  color:black;
  margin-top:-0.6rem;
  
  

  /* Add styles for the sidebar buttons */


  .navLink {
    font-size: 14px; /* Adjust the font size to increase the button text size */
    padding: 10px 7px; /* Adjust the padding to increase the button size */
  }

  

  /* Add styles for the active button */
  .navLink.active::after {
    visibility: none;
    transform: scaleX(1);
    transition: transform 0.3s;
    
  }

  @media (max-width: 760px) {
    /* Additional styles for mobile screens */
    flex-direction: column;
    align-items: center;
    justify-content: start;
    height: 100vh;
    width:100vw;
    position: fixed;
    top: 8%;
    left: 0;
    background-color: black; /* Add the desired background color here */
    backdrop-filter: blur(10px);
    opacity: 0.9;
    padding: 0;
    margin: 0;
    border-bottom-right-radius:20px;
    list-style-type: none;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
    

    &.open {
      transform: translateY(0%);
    }

    /* Increase the padding for the sidebar buttons on mobile screens */
    li {
      padding: 10px 0;
    }

    .navLink {
      font-size: 20px; /* Adjust the font size to increase the button text size */
      padding: 20px 1px; /* Adjust the padding to increase the button size */
    }
  }

  @media (min-width: 761px) {
    flex: 1;
    justify-content: flex-end;
  }
}

.navLink {
  position: relative;
  margin-top:1rem
}

.navLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 3px;
  background: rgba(18, 203, 196, 1);
  visibility: hidden;
  transform: scaleX(0);
  transition: visibility 0s linear 0.3s, transform 0.3s;
  color:#000000
}



.navLink.active::after {
  visibility: visible;
  transform: scaleX(1);
  transition: transform 0.3s;
  

}

.sidebarButton {
  padding: 20px 30px; /* Increase the padding to increase the button size */
  font-size: 15px; /* Increase the font size to increase the button text size */
  
}


 const RequestDemoLink = styled(Link)`;

export default Header;
