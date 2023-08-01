import React from 'react';
import styled from 'styled-components';

const GuideContainer = styled.div`
    display: block;
    background-color: rgb(249, 249, 249);
    padding: 20px;
    margin: 10px;
    border: 1px solid rgb(221, 221, 221);
    font-family: Arial,sans-serif;
    box-sizing: border-box;
`;

const MarkdownGuide: React.FC = () => {
    return (

        <GuideContainer>
            <h3>Markdown Cheat Sheet</h3>
            <li><code># H1</code></li>
            <li><code>## H2</code></li>
            <li><code>### H3</code></li>
            <li><code>**bold**</code></li>
            <li><code>*italic*</code></li>
            <li><code>[Link](http://a.com)</code></li>
            <li><code>![Image](http://url/a.png)</code></li>
            <li><code>`inline code`</code></li>
            <li><code>```block code```</code></li>
            <li><code>- list item</code></li>
        </GuideContainer>

    );
};

export default MarkdownGuide;
