import { CartIcon, SaveIcon } from "./Icons";
import {
    Header,
    Logo,
    LogoContainer,
    NavLinkContainer,
    StyledNavLink,
    SubHeading,
} from "./TopNav.styles";

export const TopNav: React.FC = () => {
    return (
        <Header>
            <LogoContainer>
                <StyledNavLink to="/">
                    <Logo src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
                    <SubHeading>Clone</SubHeading>
                </StyledNavLink>
            </LogoContainer>
            <NavLinkContainer>
                <StyledNavLink to="/saved">
                    <SaveIcon width="24" height="24" />
                    <span>Saved</span>
                </StyledNavLink>
                <StyledNavLink to="/cart">
                    <CartIcon width="24" height="24" />
                    <span>Cart</span>
                </StyledNavLink>
            </NavLinkContainer>
        </Header>
    );
};
