import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
}>


const Container = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const EatsList: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default EatsList;
