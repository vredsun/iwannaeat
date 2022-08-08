import { PropsWithChildren } from 'react';
import Tag from '../../../ui/atoms/Tag/Tag';

const TagConnected: React.FC<PropsWithChildren> = ({ children }) => (
  <Tag>{children}</Tag>
)

export default TagConnected;
