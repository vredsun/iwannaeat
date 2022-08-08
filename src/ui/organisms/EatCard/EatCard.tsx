import { memo, useMemo } from 'react';
import { EatData } from '../../../models/eats/models';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tag from '../../atoms/Tag/Tag';

export const EatCardContainer = styled(Link)`
  width: 100%;
  background-color: white;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
`;

export const EatCardTitleContainer = styled.div`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  font-size: 22px;
`

export const EatCardTitle = styled.div`
  font-weight: 600;
`

export const EatCardImage = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  height: 200px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

type Props = {
  eat: EatData;
}

// const RatingRecord: Record<number, string> = {
//   1: '1',
//   2: '2',
//   3: '3',
//   4: '4',
//   5: '5',
// }

const EatCard: React.FC<Props> = memo(({ eat }) => {
  const hashtagsArray = useMemo(
    () => {
      const arr: Array<string> = [];

      return arr
    },
    [],
  );


  return (
    <EatCardContainer to={`/all/${eat.id}`}>
      <EatCardTitleContainer>
        <EatCardTitle>{eat.name}</EatCardTitle>
      </EatCardTitleContainer>
      <TagContainer>{
        hashtagsArray.map(hashtag => (
          <Tag key={hashtag}>{hashtag}</Tag>
        ))
      }</TagContainer>
    </EatCardContainer>
  )
});

export default EatCard;
