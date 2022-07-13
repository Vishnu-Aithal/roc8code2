import { useAppSelector } from "../../store/store";
import {
    Container,
    GreenText,
    Header,
    TextContainer,
    TotalText,
} from "./CartComponents.styled";

export const CartDetails: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const cartDetails = cartItems.reduce(
        (details, item) => ({
            totalPrice: +item.price * item.qty + details.totalPrice,
            totalQty: details.totalQty + item.qty,
        }),
        { totalPrice: 0, totalQty: 0 }
    );
    const discount = cartDetails.totalPrice * 0.2;
    const finalTotal = cartDetails.totalPrice - discount;

    return (
        <Container>
            <Header>Price Details</Header>
            <TextContainer>
                <p>{`Price (${cartDetails.totalQty} items)`}</p>
                <p>{`₹${cartDetails.totalPrice.toFixed(2)}`}</p>
            </TextContainer>
            <TextContainer>
                <p>Discount</p>
                <GreenText>{`- ₹${discount.toFixed(2)}`}</GreenText>
            </TextContainer>
            <TextContainer>
                <p>Delivery Charges</p>
                <GreenText>FREE</GreenText>
            </TextContainer>
            <TotalText>
                <p>Total Amount</p>
                <p>{`₹${finalTotal.toFixed(2)}`}</p>
            </TotalText>
            <TextContainer>
                <GreenText>{`You will save ₹${discount.toFixed(
                    2
                )} on this order`}</GreenText>
            </TextContainer>
        </Container>
    );
};
