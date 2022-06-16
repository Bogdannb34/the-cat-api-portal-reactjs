import React, { useState } from "react";
import {
  NavContainer,
  LeftContainer,
  RightContainer,
  NavInContainer,
  NavExtendedContainer,
  NavLink,
  NavLinkContainer,
  NavLinkExtended,
  NavLogo,
  OpenLinkBtn,
} from "../styles/Navbar.style";
import LogoImg from "../assets/catsDogsLogo.png";

const Navbar = () => {
  const [showNavy, setShowNavy] = useState(false);

  return (
    <NavContainer showNavy={showNavy}>
      <NavInContainer>
        <LeftContainer>
          <NavLinkContainer>
            <NavLink to="/the-cat-api-portal-reactjs">Home</NavLink>
            <NavLink to="/upload"> Upload </NavLink>
            <NavLink to="/myImages">My Images</NavLink>
            <NavLink to="/publicImages">Public Images</NavLink>
            <OpenLinkBtn
              onClick={() => {
                setShowNavy((curr) => !curr);
              }}
            >
              {showNavy ? <>&times;</> : <> &#8801;</>}
            </OpenLinkBtn>
          </NavLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavLogo src={LogoImg} alt="Cats&Dogs-Logo"></NavLogo>
        </RightContainer>
      </NavInContainer>
      {showNavy && (
        <NavExtendedContainer>
          <NavLinkExtended
            to="/home"
            onClick={() => {
              setShowNavy((curr) => !curr);
            }}
          >
            Home
          </NavLinkExtended>
          <NavLinkExtended
            to="/myImages"
            onClick={() => {
              setShowNavy((curr) => !curr);
            }}
          >
            My Images
          </NavLinkExtended>
          <NavLinkExtended
            to="/publicImages"
            onClick={() => {
              setShowNavy((curr) => !curr);
            }}
          >
            Public Images
          </NavLinkExtended>
          <NavLinkExtended
            to="/upload"
            onClick={() => {
              setShowNavy((curr) => !curr);
            }}
          >
            Upload
          </NavLinkExtended>
        </NavExtendedContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;
