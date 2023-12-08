/* eslint-disable react/prop-types */
import styled from 'styled-components';

const SelectNumberContainer = styled.div`
  div {
    display: flex;
    gap: 24px;

    @media (max-width: 460px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  p {
    height: 36px;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: end;

    margin-top: 15px;

    @media (max-width: 800px) {
      text-align: center;
    }
  }
`;

const Box = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 72px;
  padding: 18px, 0px, 18px, 0px;

  border: black 1px solid;

  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;

const diceNumber = [1, 2, 3, 4, 5, 6];

const BoxUi = ({ selected, setSelected }) => {
  return (
    <SelectNumberContainer>
      <div>
        {diceNumber.map((number, i) => (
          <Box
            isSelected={selected === number}
            onClick={() => setSelected(number)}
            key={i}
          >
            {number}
          </Box>
        ))}
      </div>

      <p>Select Number</p>
    </SelectNumberContainer>
  );
};

export default BoxUi;
