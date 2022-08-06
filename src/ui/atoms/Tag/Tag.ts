import styled from 'styled-components';

const Tag = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #171717;
  color: #171717;
  font-weight: 500;

  &:hover {
    color: green;
    border-color: green;
    cursor: pointer;
  }
`

export default Tag;