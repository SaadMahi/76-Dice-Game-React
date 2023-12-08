import styled from 'styled-components';

const InstructionsContainer = styled.section`
  background-color: #fbf1f1;
  padding: 20px;

  border-radius: 10px;

  h2 {
    margin-bottom: 20px;
  }
`;

const InstructionUi = () => {
  return (
    <InstructionsContainer>
      <h2>How to play dice game</h2>

      <ol>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>
          After click on dice if selected number is equal to dice number you
          will get same point as dice
        </li>
        <li>If you get wrong guess then 2 point will be dedcuted</li>
      </ol>
    </InstructionsContainer>
  );
};

export default InstructionUi;
