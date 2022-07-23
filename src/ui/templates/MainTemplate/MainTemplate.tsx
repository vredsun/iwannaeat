import type { PropsWithChildren } from 'react';
import MainTemplateBody from './styled/Body';
import MainTemplateContainer from './styled/Container';
import MainTemplateFooter from './styled/Footer';
import MainTemplateHeader from './styled/Header';

type PropsT = PropsWithChildren<{
}>;

const MainTemplate: React.FC<PropsT> = ({ children }) => {
  return (
    <MainTemplateContainer>
      <MainTemplateHeader>header</MainTemplateHeader>
      <MainTemplateBody>{children}</MainTemplateBody>
      <MainTemplateFooter>footer</MainTemplateFooter>
    </MainTemplateContainer>
  )
}

export default MainTemplate;
