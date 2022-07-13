import { useAppSelector } from "../../store/store";
import { CartCard } from "../Card/CartCard";
import { Container, Header } from "./CartComponents.styled";

export const CartContainer: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    return (
        <Container>
            <Header>{`My Cart (${cartItems.length})`}</Header>
            {cartItems.map((item) => (
                <CartCard product={item} key={item.id} />
            ))}
        </Container>
    );
};
