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
	StyledInput,
	StyledError
} from './home.styles';

const Home = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { firstName: '', lastName: '', emailAddress: '' }
	});

	// console.log(errors);

	return (
		<StyledContainer>
			<form onSubmit={handleSubmit()}>
				<StyledTitle>Contact Us</StyledTitle>

				<StyledFirstName>
					<StyledLabelFirstName>First Name *</StyledLabelFirstName>
					<StyledInput
						{...register('firstName', {
							required: 'This field is required',
							minLength: 4
						})}
						$active={errors.firstName}
					/>
					<StyledError>{errors.firstName?.message}</StyledError>
				</StyledFirstName>

				<StyledLastName>
					<StyledLabelLastName>Last Name *</StyledLabelLastName>
					<StyledInput
						{...register('lastName', {
							required: 'This field is required',
							minLength: 4
						})}
						$active={errors.lastName}
					/>
					<StyledError>{errors.lastName?.message}</StyledError>
				</StyledLastName>

				<StyledEmailAddress>
					<StyledLabelEmail>Email Address *</StyledLabelEmail>
					<StyledInput
						{...register('emailAddress', {
							required: 'Please enter a valid email address',
							pattern: {
								value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
								message: 'Please enter a valid email address'
							}
						})}
						$active={errors.emailAddress}
					/>
					<StyledError>{errors.emailAddress?.message}</StyledError>
				</StyledEmailAddress>

				<StyledSpanQueryType>Query Type *</StyledSpanQueryType>
				<StyledQueryGeneral>
					<StyledLabelGeneral>General Enquiry</StyledLabelGeneral>
					<StyledRadio
						name='query'
						type='radio'
						{...register('query', {
							required: 'Please select a query type'
						})}
					/>
				</StyledQueryGeneral>
				<StyledQuerySupport>
					<StyledLabelSupport>Support Request</StyledLabelSupport>
					<StyledRadio
						name='query'
						type='radio'
						{...register('query', {
							required: 'Please select a query type'
						})}
					/>
				</StyledQuerySupport>
				<StyledError>{errors.query?.message}</StyledError>

				<StyledMessage>Message *</StyledMessage>
				<StyledMessageBox
					{...register('messageBox', {
						required: 'This field is required'
					})}
					$active={errors.messageBox}
				></StyledMessageBox>
				<StyledError>{errors.messageBox?.message}</StyledError>

				<StyledCheckboxContainer>
					<StyledCheck
						type='checkbox'
						{...register('check', {
							required: 'To submit this form, please consent to being contacted'
						})}
					/>
					<StyledCheckConsent>
						I consent to being contacted by the team *
					</StyledCheckConsent>
				</StyledCheckboxContainer>
				<StyledError>{errors.check?.message}</StyledError>
				<StyledSubmit type='submit' value='Submit' />
			</form>
		</StyledContainer>
	);
};

export default Home;
