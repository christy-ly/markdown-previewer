import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

interface MarkdownOutputProps {
  markdown: string;
}

const OutputContainer = styled.div`
width: 50%;
  background-color: #f8f8f8;
  height: 100vw;
  display: block;
  font-size: 10px;
  padding: 0px 10px;
  border-left-color: #5A5A5A;
`;

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return <OutputContainer><ReactMarkdown>{markdown}</ReactMarkdown></OutputContainer>;
};

export default MarkdownOutput;
