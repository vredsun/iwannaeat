import { memo, useMemo } from 'react';
import { EatData } from '../../../models/eats/models';

import styled from 'styled-components';
import Tag from '../../atoms/Tag/Tag';
import { Link } from 'react-router-dom';

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

const RatingRecord: Record<number, string> = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
}

const EatCard: React.FC<Props> = memo(({ eat }) => {
  const hashtagsArray = useMemo(
    () => {
      const arr: Array<string> = [];

      eat.hashTagsSet.forEach(hashTag => arr.push(hashTag))

      return arr
    },
    [eat.hashTagsSet],
  );

  const handleClick = () => {

  }

  return (
    <EatCardContainer to={`/${eat.id}`}>
      <EatCardTitleContainer>
        {/* <span>{RatingRecord[eat.rating]}</span> */}
        <EatCardTitle>{eat.title}</EatCardTitle>
      </EatCardTitleContainer>
      <div>
        {
          eat.imgUrl && (
            <EatCardImage url={eat.imgUrl} />
          )
        }
      </div>
      {/* <div>
        <div>Состав:</div>
        <ul>
          <li>Хлеб</li>
          <li>Колбаса</li>
          <li>Помидоры</li>
        </ul>
      </div> */}
      <TagContainer>{
        hashtagsArray.map(hashtag => (
          <Tag key={hashtag}>{hashtag}</Tag>
        ))
      }</TagContainer>
    </EatCardContainer>
  )
});

export default EatCard;
