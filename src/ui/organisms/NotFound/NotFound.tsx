import { FaDirections } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 12px;
  font-size: 40px;
  font-weight: 600;
`;

const Icon = styled(FaDirections)`
    font-size: 40px;
`;

export const NotFound: React.FC = () => {
    return (
        <Container>
            <div>404</div>
            <Icon />
        </Container>
    )
}