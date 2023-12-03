/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { ButtonStart } from '../ui/Button';

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2px;

  .content {
    display: flex;
    flex-direction: column;

    Button {
      align-self: flex-end;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    transform: scale(0.75);
  }

  @media (max-width: 450px) {
    transform: scale(0.5);
  }
`;

const Home = ({ setStartGame }) => {
  return (
    <Container>
      <div>
        <img src='/images/dices.png' />
      </div>

      <div className='content'>
        <Heading>dice game</Heading>
        <ButtonStart onClick={() => setStartGame((prev) => !prev)}>
          Play Now
        </ButtonStart>
        {/* <Button variant='start'>Play Now</Button> */}
      </div>
    </Container>
  );
};

export default Home;
