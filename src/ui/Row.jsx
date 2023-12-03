import styled from 'styled-components';

const RowUi = styled.section`
  display: flex;
`;

const Row = ({ children }) => {
  return <RowUi>{children}</RowUi>;
};

export default Row;
