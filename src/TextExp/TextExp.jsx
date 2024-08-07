import { useState } from "react";
import styled from "styled-components";

const ExpDiv = styled.div`
  width: auto;
  margin: 0 auto;
`;

const Igor = "100kg";

function TextExp() {
  return (
    <ExpDiv>
      <h2>Text Expanders</h2>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>
      <TextExpander
        collapsedNumWords={20}
        epxandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
      <TextExpander expanded={true}>
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </ExpDiv>
  );
}

export default TextExp;

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "Show more",

  collapseButtonText = "Show less",
  expanded = false,
  children,
  buttonColor = "#fca",
}) {
  const [IsExpanded, setIsExpanded] = useState(expanded);
  const displayText = IsExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
    outline: "none",
  };

  return (
    <div>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {IsExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
