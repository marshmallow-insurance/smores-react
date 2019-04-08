import * as React from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

interface IInput {
	error: boolean;
}

type Props = {
	/** ID, usually used for tests  */
	id: string;
	/** Placeholder */
	placeholder: string;
	/** label displayed above the input  */
	label?: string;
	/** used for label - input connection */
	name?: string;
	value: string;
	/** error flag */
	error?: boolean;
	/** error text message */
	errorMsg?: string;
	/** onChange listener */
	onChange: (e: string) => void;
	/** onChange listener */
	trailingIcon?: string;
};

type State = {
	value: string;
};

class TextInput extends React.PureComponent<Props, State> {
	public render() {
		const {
			id,
			placeholder,
			label,
			name,
			value,
			error,
			errorMsg,
			trailingIcon
		} = this.props;

		return (
			<Container>
				{
					label &&
					<Label htmlFor={name}>{label}</Label>
				}
				<Content error={error || false}>
					<Input
						type="text"
						id={id}
						name={name}
						placeholder={placeholder}
						value={value}
						error={error || false}
						autoComplete="off"
						onChange={this.handleOnChange}
					/>
					{
						trailingIcon &&
						<Icon
							render='contact-at'
							size='32'
							color='grey4'
						/>
					}
				</Content>
				{
					error &&
					<ErrorBox>{errorMsg}</ErrorBox>
				}

			</Container>
		)
	}

	private handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
		const { onChange } = this.props;
		const value = e.currentTarget.value;

		onChange(value);
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 64px;
`;

const Label = styled.label`
	color: ${p => p.theme.colors.grey4};
	font-size: 10px;
	text-transform: uppercase;
	font-weight: 700;
	font-family: ${p => p.theme.font.family.bold};
`;

const Content = styled.div<IInput>`
	border-bottom: 1px solid;
	border-color:  ${p => p.theme.colors[`${p.error ? 'red7' : 'grey4'}`]};
	display: flex;
	height: 32px;

	&:hover {
		border-color: ${p => p.theme.colors[`${p.error ? 'red7' : 'grey6'}`]};
	}

	&:focus {
		border-color: ${p => p.theme.colors[`${p.error ? 'red7' : 'blue5'}`]};
	}
`;

const Input = styled.input<IInput>`
	border: none;
	color: ${p => p.theme.colors[`${p.error ? 'red7' : 'black'}`]};
	font-family: ${p => p.theme.font.family.normal};
	font-size: 16px;
	width: 254px;
	outline: none;
	transition: all 0.2s ease-out;


	&::placeholder {
		color: ${p => p.theme.colors.grey4};
	}
`;

const ErrorBox = styled.span`
	margin-top: 7px;
	color: ${p => p.theme.colors.red7};
	font-family: ${p => p.theme.font.family.normal};
	font-size: 12px;
`;

export default TextInput;