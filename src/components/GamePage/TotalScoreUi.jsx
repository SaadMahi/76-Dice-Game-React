/* eslint-disable react/prop-types */
import styled from 'styled-components';

const TotalScore = styled.div`
  width: 135px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .score {
    font-weight: 500;
    font-size: 100px;
    height: 100px;
    width: 62px;
    display: flex;
    align-items: center;
  }

  .score + p {
    font-weight: 500;
    font-size: larger;
  }
`;

const TotalScoreUi = ({ score }) => {
  return (
    <TotalScore>
      <p className='score'>{score}</p>
      <p>Total Score</p>
    </TotalScore>
  );
};

export default TotalScoreUi;
