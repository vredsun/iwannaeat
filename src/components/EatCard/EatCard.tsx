import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import styled from 'styled-components';
import { RootState } from '../../models';
import { selectEatsById } from '../../models/eats/selectors';

const Container = styled.div`
  margin: 8px 0;
`;

const EatTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  padding: 4px 8px;
`;

const EatCardConnected: React.FC = () => {
  const { id } = useParams();
  const eatData = useSelector((state: RootState) => {
    if (id) {
      return selectEatsById(state)[id];
    }

    return null;
  });

  if (!eatData) {
    return (
      <Navigate to="../../404" replace />
    )
  }

  return (
    <Container>
      <EatTitle>{eatData.name}</EatTitle>
    </Container>
  )
}

export default EatCardConnected;
