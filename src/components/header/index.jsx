import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Cart from '../cart/index';

// Styles
import * as Styles from './styles';
import { loginUser, logoutUser } from '../../redux/user/actions';

function Header() {
	const [cartIsVisible, setCartIsVisible] = useState(false);

	const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
	const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

	const productsCount = useMemo(() => {
		return products.reduce((acc, curr) => acc + curr.quantity, 0);
	}, [products]);

	const dispatch = useDispatch();

	const handleLoginClick = () => {
		dispatch(
			loginUser({ nome: 'Nícolas', email: 'nicolasmedeiros090@gmail.com' })
		);
	};

	const handleLogoutClick = () => {
		dispatch(logoutUser());
	};

	const handleCartClick = () => {
		setCartIsVisible(true);
	};

	return (
		<Styles.Container>
			<Styles.Logo>Redux Shopping</Styles.Logo>
			<Styles.Buttons>
				{currentUser ? (
					<div onClick={handleLogoutClick}>Sair</div>
				) : (
					<div onClick={handleLoginClick}>Login</div>
				)}
				<div onClick={handleCartClick}>
					Carrinho
					{productsCount !== 0 ? <span> ({productsCount})</span> : <></>}
				</div>
			</Styles.Buttons>

			<Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
		</Styles.Container>
	);
}

export default Header;
