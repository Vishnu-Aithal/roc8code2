import { CartDetails } from "../components/CartPageComponents/CartDetails";
import { CartContainer } from "../components/CartPageComponents/CartContainer";
import { CartPageLayout } from "../components/Layout/PageLayout.styled";

export const CartPage: React.FC = () => {
    return (
        <CartPageLayout>
            <CartContainer />
            <CartDetails />
        </CartPageLayout>
    );
};
