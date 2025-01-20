import { Link } from 'react-router-dom';
import { StyledLink } from './menu.styles';

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<StyledLink to='/'>HOME</StyledLink>
				</li>
				<li>
					<StyledLink to='/about'>ABOUT</StyledLink>
				</li>
				<li>
					<StyledLink to='/user'>USER</StyledLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
