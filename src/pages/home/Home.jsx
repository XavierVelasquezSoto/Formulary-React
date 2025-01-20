import { useForm } from 'react-hook-form';
import {
	StyledContainer,
	StyledFirstName,
	StyledLastName,
	StyledEmailAddress,
	StyledQueryGeneral,
	StyledTitle,
	StyledLabelFirstName,
	StyledLabelLastName,
	StyledLabelEmail,
	StyledMessage,
	StyledMessageBox,
	StyledCheckboxContainer,
	StyledCheck,
	StyledCheckConsent,
	StyledSubmit,
	StyledRadio,
	StyledSpanQueryType,
	StyledQuerySupport,
	StyledLabelGeneral,
	StyledLabelSupport,
	StyledInput
} from './home.styles';

const Home = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { firstName: '', lastName: '', emailAddress: '' }
	});

	console.log(errors);

	return (
		<StyledContainer>
			<form onSubmit={handleSubmit(data)}>
				<StyledTitle>Contact Us</StyledTitle>

				<StyledFirstName>
					<StyledLabelFirstName>First Name *</StyledLabelFirstName>
					<StyledInput
						{...register('firstName', {
							required: 'This field is required',
							minLength: 4
						})}
					/>
					{errors && <span>{errors.firstName}</span>}
				</StyledFirstName>

				<StyledLastName>
					<StyledLabelLastName>Last Name *</StyledLabelLastName>
					<StyledInput
						{...register('lastName', { required: true, minLength: 4 })}
					/>
					{/* <span>{errors.lastName}</span> */}
				</StyledLastName>

				<StyledEmailAddress>
					<StyledLabelEmail>Email Address *</StyledLabelEmail>
					<StyledInput
						{...register('emailAddress', { required: true, minLength: 4 })}
					/>
					{/* <span>{errors.emailAddress}</span> */}
				</StyledEmailAddress>

				<StyledSpanQueryType>Query Type *</StyledSpanQueryType>
				<StyledQueryGeneral>
					<StyledLabelGeneral>General Enquiry</StyledLabelGeneral>
					<StyledRadio name='query' type='radio' />
				</StyledQueryGeneral>
				<StyledQuerySupport>
					<StyledLabelSupport>Support Request</StyledLabelSupport>
					<StyledRadio name='query' type='radio' />
				</StyledQuerySupport>

				<StyledMessage>Message *</StyledMessage>
				<StyledMessageBox></StyledMessageBox>

				<StyledCheckboxContainer>
					<StyledCheck type='checkbox' />
					<StyledCheckConsent>
						I consent to being contacted by the team *
					</StyledCheckConsent>
				</StyledCheckboxContainer>
				<StyledSubmit type='submit' value='Submit' />
			</form>
		</StyledContainer>
	);
};

export default Home;
