import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    overflow-y: auto;
    gap: 1rem;
    box-shadow: 0 2px 8px lightgray;
    align-items: center;
    min-width: 30%;
`;

export const Header = styled.h3`
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: 600;
    color: gray;
    border-bottom: solid 1px lightgray;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
`;

export const TotalText = styled(TextContainer)`
    font-weight: 600;
    font-size: 1.1rem;
    border-top: solid 1px lightgray;
    border-bottom: solid 1px lightgray;
    padding: 1rem 0;
`;

export const GreenText = styled.p`
    color: green;
`;
