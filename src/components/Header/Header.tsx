import styled from "styled-components";

const Container = styled.div<{ scrollPercent: number }>`
  padding: ${({ scrollPercent }) => `${8 - 6 * scrollPercent}px 12px`};
  display: flex;
  justify-content: space-between;
  background-color: green;
  align-items: center;
`;

const Title = styled.div`
  color: #f5f5f5;
  font-size: 26px;
  font-weight: 600;
`;

// const Search = styled.div`
//   color: #f5f5f5;
//   font-size: 18px;
//   font-weight: 600;
// `;

type Props = {
  scrollPercent: number;
}

const HeaderConnected: React.FC<Props> = ({ scrollPercent }) => {
  return (
    <Container scrollPercent={scrollPercent}>
        <Title>IWannaEat</Title>
        {/* <Search>Поиск</Search> */}
    </Container>
  )
}

export default HeaderConnected;
