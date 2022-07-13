import styled from "styled-components";

export const PageLayout = styled.div`
    padding: 2rem;
    width: 100vw;
    height: 100%;
    overflow-y: auto;
`;

export const ProductsPageLayout = styled(PageLayout)`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const CartPageLayout = styled(PageLayout)`
    display: flex;
    padding: 2rem 0;
    justify-content: space-around;
`;
