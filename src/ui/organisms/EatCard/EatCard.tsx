import { memo, useMemo } from 'react';
import { EatData } from '../../../models/eats/models';

import styled from 'styled-components';
import Tag from '../../atoms/Tag/Tag';

export const EatCardContainer = styled.div`
  width: 100%;
  background-color: #e3e3e3;
`;

export const TagContainer = styled.div`
  display: flex;
`;

type Props = {
  eat: EatData;
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

  return (
    <EatCardContainer>
      <div>
        <span>{eat.title}</span>
        <span>{Array.from({ length: eat.rating }).map((d, i) => <span key={i}>⭐</span> )}</span>
      </div>
      <div>
        {
          eat.imgUrl && (
            <img src={eat.imgUrl}></img>
          )
        }
      </div>
      <TagContainer>{
        hashtagsArray.map(hashtag => (
          <Tag key={hashtag}>{hashtag}</Tag>
        ))
      }</TagContainer>
    </EatCardContainer>
  )
});

export default EatCard;
