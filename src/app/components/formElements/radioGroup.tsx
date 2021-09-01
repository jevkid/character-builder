import * as React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

interface RadioGroupProps {
  className?: string;
}

interface RadioInputProps {
  name: string;
  value: string;
  label?: string;
  checked?: boolean;
  onChange?: (e?: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const StyledRadioLabel = styled.label`
  display: flex;
  padding: 8px 0;
  text-align: left;
`;

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledRadio = styled(Field)`
  margin-right: 8px;
`;

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  return (
    <StyledRadioGroup
      role="group"
      aria-labelledby="radio-group"
      className={props.className}
    >
      {props.children}
    </StyledRadioGroup>
  );
};

export const RadioInput: React.FC<RadioInputProps> = (props) => {
  return (
    <StyledRadioLabel>
      <StyledRadio
        type="radio"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
      {props.label}
    </StyledRadioLabel>
  );
};
