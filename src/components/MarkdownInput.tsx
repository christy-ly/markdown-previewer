import React from 'react';
import styled from 'styled-components';

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputContainer = styled.div`
  width: 50%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 0px 20px
`;

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
