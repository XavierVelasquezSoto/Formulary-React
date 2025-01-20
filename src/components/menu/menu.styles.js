import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
	display: block;
	font-size: 18px;
	padding-inline: 20px;
	margin: 8px 0;

	&.active {
		color: red;
		border: 2px solid aliceblue;
	}
`;

// Link para navegación sin saber el menu activo
//NavLink para navegación sabiendo el menu activo

export { StyledLink };
