import { CartProductType } from "../../models/ProductType";
import {
    decrementCartItemQty,
    incrementCartItemQty,
    removeFromCart,
    saveForLater,
} from "../../store/cart";

import { useAppDisatch } from "../../store/store";
import {
    Brand,
    Details,
    HorizontalContainer,
    IdealFor,
    Img,
    Name,
    Price,
    Size,
    QtyButton,
    QuantityContainer,
    CartBtnContainer,
    CartCardContainer,
    Quantity,
    TextBtn,
} from "./Card.styled";

export const CartCard: React.FC<{
    product: CartProductType;
}> = ({ product }) => {
    const dispatch = useAppDisatch();
    return (
        <CartCardContainer>
            <HorizontalContainer>
                <Img src={product.image.src} alt={product.image.alt} />
                <Details>
                    <Brand>{product.brand}</Brand>
                    <Name>{product.name}</Name>
                    <Price>{`Price - ${product.price} ₹`}</Price>
                    <Size>{`Size - ${product.size}`}</Size>
                    <IdealFor>{`Ideal For - ${product.idealFor}`}</IdealFor>
                </Details>
            </HorizontalContainer>
            <CartBtnContainer>
                <QuantityContainer>
                    <QtyButton
                        disabled={product.qty === 1}
                        onClick={() =>
                            dispatch(
                                decrementCartItemQty({ itemId: product.id })
                            )
                        }>
                        -
                    </QtyButton>
                    <Quantity>{product.qty}</Quantity>
                    <QtyButton
                        onClick={() =>
                            dispatch(
                                incrementCartItemQty({ itemId: product.id })
                            )
                        }>
                        +
                    </QtyButton>
                </QuantityContainer>
                <TextBtn
                    onClick={() => dispatch(saveForLater({ item: product }))}>
                    Save For Later
                </TextBtn>
                <TextBtn
                    onClick={() =>
                        dispatch(removeFromCart({ itemId: product.id }))
                    }>
                    Remove
                </TextBtn>
            </CartBtnContainer>
        </CartCardContainer>
    );
};
