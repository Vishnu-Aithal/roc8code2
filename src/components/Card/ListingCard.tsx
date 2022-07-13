import { useNavigate } from "react-router-dom";
import { ProductType } from "../../models/ProductType";
import { addToCart } from "../../store/cart";
import { useAppDisatch } from "../../store/store";
import {
    Brand,
    AddCartButton,
    Container,
    Details,
    IdealFor,
    Img,
    Name,
    Price,
    Size,
} from "./Card.styled";

export const ListingCard: React.FC<{
    product: ProductType;
    inCart: boolean;
}> = ({ product, inCart }) => {
    const dispatch = useAppDisatch();
    const navigate = useNavigate();
    return (
        <Container>
            <Img src={product.image.src} alt={product.image.alt} />
            <Details>
                <Brand>{product.brand}</Brand>
                <Name>{product.name}</Name>
                <Price>{`Price - ${product.price} ₹`}</Price>
                <Size>{`Size - ${product.size}`}</Size>
                <IdealFor>{`Ideal For - ${product.idealFor}`}</IdealFor>
            </Details>
            {!inCart ? (
                <AddCartButton
                    inCart={inCart}
                    onClick={() => dispatch(addToCart({ item: product }))}>
                    Add to Cart
                </AddCartButton>
            ) : (
                <AddCartButton
                    inCart={inCart}
                    onClick={() => navigate("/cart")}>
                    Go To Cart
                </AddCartButton>
            )}
        </Container>
    );
};
