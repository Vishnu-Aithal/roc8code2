import { ListingCard } from "../components/Card/ListingCard";
import { ProductsPageLayout } from "../components/Layout/PageLayout.styled";
import data from "../data/products.json";
import { ProductType } from "../models/ProductType";
import { useAppSelector } from "../store/store";
export const ProductsPage: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const inCart = (productId: number) => {
        const index = cartItems.findIndex((item) => item.id === productId);
        console.log(index);
        return index > -1;
    };
    return (
        <ProductsPageLayout>
            {(data.products as ProductType[]).map((product) => (
                <ListingCard
                    product={product}
                    key={product.id}
                    inCart={inCart(product.id)}
                />
            ))}
        </ProductsPageLayout>
    );
};
