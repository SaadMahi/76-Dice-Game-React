import styled from 'styled-components';

import BoxUi from './BoxUi';
import TotalScoreUi from './TotalScoreUi';
import RollDiceUi from './RollDiceUi';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ScoreContainer = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 45px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
  }

  @media (max-width: 600px) {
    transform: scale(0.75);
    margin-bottom: 1rem;
  }
`;

const GamePage = () => {
  const [shuffledNumber, setShuffledNumber] = useState(1);
  const [selected, setSelected] = useState();

  const shuffleDice = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const rolledDice = Number(shuffleDice(1, 6));

  const [score, setScore] = useState(0);

  const onRollDice = () => {
    if (!selected) {
      var error = toast.error('You have not selected any Number');
      return;
    }

    toast.dismiss(error);

    setShuffledNumber(rolledDice);
    setSelected(undefined);

    if (selected === rolledDice) {
      setScore((prev) => prev + rolledDice);
    } else {
      setScore((prev) => prev - 2);
    }
  };

  return (
    <main>
      <ScoreContainer>
        <TotalScoreUi setScore={setScore} score={score} />

        <BoxUi setSelected={setSelected} selected={selected} />
      </ScoreContainer>

      <RollDiceUi
        onRollDice={onRollDice}
        shuffleDice={setShuffledNumber}
        shuffledNumber={shuffledNumber}
        setScore={setScore}
        setSelected={setSelected}
      />
    </main>
  );
};

export default GamePage;
