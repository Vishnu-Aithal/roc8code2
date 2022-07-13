import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    height: fit-content;
    width: 300px;
    border: solid 1px lightgray;
    border-radius: 2px;
    box-shadow: 0 1px 2px lightgray;
`;

export const Img = styled.img`
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 200px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
`;

export const Brand = styled.p`
    font-size: large;
    font-weight: bold;
    color: gray;
`;

export const Name = styled.p`
    font-weight: 500;
`;
export const Price = styled.p``;
export const Size = styled.p``;
export const IdealFor = styled.p``;

export const AddCartButton = styled.button<{ inCart: boolean }>`
    margin-top: 0.5rem;
    outline: none;
    background-color: ${(props) => (props.inCart ? "#2874f0" : "#ff9f00")};
    padding: 0.5rem;
    border-radius: 3px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.inCart ? "#287ff0" : "#f39805")};
    }
`;

export const CartBtnContainer = styled.div`
    display: flex;
`;

export const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
`;

export const Quantity = styled.p`
    padding: 0.25rem 1rem;
    border: 1px solid lightgray;
`;

export const QtyButton = styled.button`
    border-radius: 50%;
    width: 2rem;
    padding: 0.5rem;
    border: 1px solid lightgray;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }

    &:disabled {
        pointer-events: none;
    }
`;

export const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;

    & ${Img} {
        width: 40%;
    }

    & ${Details} {
        justify-content: space-around;
    }
`;

export const CartCardContainer = styled(Container)`
    padding: 1rem;
    gap: 2rem;
    width: 90%;
    min-width: 550px;
`;

export const TextBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    font-weight: 700;
    color: gray;
    text-transform: uppercase;
    outline: none;
    border: none;
`;
