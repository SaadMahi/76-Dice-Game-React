/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonPrimary, ButtonSecondary } from '../../ui/Button';
import InstructionUi from './InstructionUi';
import { useState } from 'react';

const DiceContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    height: 250px;
    width: 250px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;

  p {
    text-align: center;
    padding: 16px 0;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const RollDiceUi = ({ shuffledNumber, onRollDice, setScore, setSelected }) => {
  const [rules, showRules] = useState(false);

  const resetScore = () => {
    setScore(0);
    setSelected(undefined);
  };

  return (
    <DiceContainer>
      <img
        onClick={onRollDice}
        src={`../../public/images/dice/dice_${shuffledNumber}.png`}
      />

      <Content>
        <p>Click on Dice to Roll</p>

        <div>
          <ButtonSecondary onClick={resetScore}>Reset</ButtonSecondary>
          <ButtonPrimary onClick={() => showRules((prev) => !prev)}>
            {rules ? 'Hide ' : 'Show'} Rules
          </ButtonPrimary>
        </div>
      </Content>

      {rules && <InstructionUi />}
    </DiceContainer>
  );
};

export default RollDiceUi;
