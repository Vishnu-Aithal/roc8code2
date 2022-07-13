import { ProductType } from "../../models/ProductType";
import { moveToCart } from "../../store/cart";
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

export const SavedCard: React.FC<{
    product: ProductType;
}> = ({ product }) => {
    const dispatch = useAppDisatch();
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

            <AddCartButton
                inCart={false}
                onClick={() => dispatch(moveToCart({ item: product }))}>
                Move To Cart
            </AddCartButton>
        </Container>
    );
};
