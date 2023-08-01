import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 100%;
`;

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <Header onToggleGuide={() => setShowGuide((prev) => !prev)} />
      {showGuide && <MarkdownGuide />}
      <Container>
        <Content>
          <MarkdownInput value={markdown} onChange={handleChange} />
          <MarkdownOutput markdown={markdown} />
        </Content>
      </Container>
    </div>
  );
};

export default App;
