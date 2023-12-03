/* eslint-disable react/prop-types */
import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  border-radius: 5px;
  border: 1px solid black;

  width: 220px;
  height: 44px;
  padding: 10px, 18px, 10px, 18px;

  transition: 0.5s;

  cursor: pointer;

  background-color: black;
  color: white;

  &:hover {
    background-color: white;

    color: black;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: white;
  color: black;

  &:hover {
    background-color: black;

    color: white;
  }
`;

export const ButtonStart = styled.button`
  line-height: 24px;
  letter-spacing: 1px;

  background-color: black;
  color: white;

  padding: 10px;

  border: none;
  border-radius: 5px;
  width: 11rem;

  cursor: pointer;

  font-weight: 400;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.5s;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;
