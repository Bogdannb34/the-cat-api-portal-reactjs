import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.showNavy ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-right: 20px;
`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;

export const NavInContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavLinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
    color: white;
    font-size: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;

    &::after {
        content: "";
        display: block;
        width: 0;
        height: .1rem;
        background: white;
        transition: width .3s;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 700px) {
        display: none;
    }
`;

export const NavLinkExtended = styled(Link)`
    color: white;
    font-size: 1.3rem;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const NavLogo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`;

export const OpenLinkBtn = styled.button`
    width: 4rem;
    height: 3rem;
    background: none;
    border: none;
    color: white;
    font-size: 3rem;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

export const NavExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;