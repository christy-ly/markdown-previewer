import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    onToggleGuide: () => void;
}

const HeaderContainer = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  padding: 0px 8px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Button = styled.button`
  background-color: rgb(97, 218, 251);
  color: black;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`;

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
    return (
        <HeaderContainer>
            <Title>Markdown Previewer</Title>
            <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
        </HeaderContainer>
    );
};

export default Header;
