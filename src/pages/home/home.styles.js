import styled from 'styled-components';

const StyledContainer = styled.div`
	min-height: 1024px;
	background-color: #fff;
	margin: 32px 16px;
	border-radius: 16px;
	padding: 24px;
`;

const StyledTitle = styled.h1`
	margin: 0;
	font-size: 32px;
	font-weight: 700;
`;

const StyledFirstName = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 32px;
`;

const StyledLabelFirstName = styled.label``;

const StyledInput = styled.input`
	margin-top: 8px;
	width: 295px;
	height: 51px;
	border-radius: 8px;
	/* border: #86a2a5 solid 1px; */
	border: ${props =>
		props.$active ? '#D73C3C solid 1px' : '#86a2a5 solid 1px'};
	padding-left: 15px;
`;

const StyledLastName = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
`;

const StyledLabelLastName = styled.label``;

const StyledInputLastName = styled.input`
	margin-top: 8px;
	width: 295px;
	height: 51px;
	border-radius: 8px;
	border: #86a2a5 solid 1px;
`;

const StyledEmailAddress = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 24px;
`;

const StyledLabelEmail = styled.label``;

const StyledInputEmail = styled.input`
	margin-top: 8px;
	width: 295px;
	height: 51px;
	border-radius: 8px;
	border: #86a2a5 solid 1px;
`;

const StyledQueryGeneral = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: start;
	align-items: center;
	margin-top: 16px;
	width: 295px;
	height: 51px;
	border: solid 1px #86a2a5;
	border-radius: 8px;
`;

const StyledLabelGeneral = styled.label``;

const StyledQuerySupport = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: start;
	align-items: center;
	margin-top: 16px;
	width: 295px;
	height: 51px;
	border: solid 1px #86a2a5;
	border-radius: 8px;
`;

const StyledLabelSupport = styled.label``;

const StyledSpanQueryType = styled.p`
	margin: 0;
	margin-top: 24px;
`;

const StyledRadio = styled.input`
	margin-right: 12px;
	margin-left: 24px;
`;

const StyledMessage = styled.p`
	margin: 0;
	margin-top: 24px;
`;

const StyledMessageBox = styled.textarea`
	margin-top: 8px;
	width: 295px;
	min-height: 272px;
	border-radius: 8px;
	/* border: #86a2a5 solid 1px; */
	border: ${props =>
		props.$active ? '#D73C3C solid 1px' : '#86a2a5 solid 1px'};
`;

const StyledCheckboxContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 40px;
`;

const StyledCheck = styled.input`
	width: 18px;
	height: 18px;
	appearance: none;
	border: 1px solid #86a2a5;

	&:checked {
		background-color: #0c7d69;
	}

	&:checked::after {
		content: '✔';
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const StyledCheckConsent = styled.p`
	margin: 0;
	font-size: 16px;
	padding-left: 16px;
`;

const StyledSubmit = styled.input`
	margin-top: 40px;
	background-color: #0c7d69;
	color: #fff;
	border: none;
	border-radius: 8px;
	width: 295px;
	height: 59px;
	font-size: 18px;
	line-height: 150%;
	font-weight: 700;
`;

const StyledError = styled.p`
	margin: 0;
	margin-top: 8px;
	color: #d73c3c;
`;

export {
	StyledContainer,
	StyledTitle,
	StyledFirstName,
	StyledLabelFirstName,
	StyledLastName,
	StyledLabelLastName,
	StyledEmailAddress,
	StyledLabelEmail,
	StyledQueryGeneral,
	StyledQuerySupport,
	StyledRadio,
	StyledMessage,
	StyledMessageBox,
	StyledCheckboxContainer,
	StyledCheck,
	StyledCheckConsent,
	StyledSubmit,
	StyledSpanQueryType,
	StyledLabelGeneral,
	StyledLabelSupport,
	StyledInput,
	StyledError
};
