import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    max-width: 100%;
    background-color: #2874f0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
`;

export const SubHeading = styled.p`
    font-style: italic;
    color: white;
    font-size: medium;
    font-weight: 600;
    margin-top: 1.5rem;
`;

export const Logo = styled.img`
    height: 2.5rem;
    object-fit: cover;
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    gap: 0.5rem;
    font-size: large;

    &.active {
        text-decoration: underline;
    }
`;

export const NavLinkContainer = styled.div`
    margin-left: auto;
    margin-right: 5rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 5rem;
`;
