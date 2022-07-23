import styled from 'styled-components';

const Tag = styled.div`
  margin: 0 6px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 10px;
  border: 1px solid grey;

  &:hover {
    color: blue;
    border-color: blue;
    cursor: pointer;
  }
`

export default Tag;
