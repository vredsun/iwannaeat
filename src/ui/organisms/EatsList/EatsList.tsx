import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { EatCardContainer } from '../EatCard/EatCard';

type Props = PropsWithChildren<{
}>


const Container = styled.div`
  ${EatCardContainer} {
    margin-top: 10px;
  }

  width: 100%;
`;

const EatsList: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default EatsList;
