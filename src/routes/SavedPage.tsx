import { SavedCard } from "../components/Card/SavedCard";
import { ProductsPageLayout } from "../components/Layout/PageLayout.styled";
import { useAppSelector } from "../store/store";
export const SavedPage: React.FC = () => {
    const savedItems = useAppSelector((state) => state.cart.savedItems);
    return (
        <ProductsPageLayout>
            {savedItems.map((product) => (
                <SavedCard product={product} key={product.id} />
            ))}
        </ProductsPageLayout>
    );
};
