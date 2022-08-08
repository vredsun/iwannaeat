import { PropsWithChildren } from 'react';
import Footer from '../../../components/Footer/Footer';
import HeaderConnected from '../../../components/Header/Header';
import MainTemplateBody from './styled/Body';
import MainTemplateContainer from './styled/Container';
import MainTemplateFooter from './styled/Footer';
import MainTemplateHeader from './styled/Header';
import { useScrollPercent } from './useScrollPercent';

type PropsT = PropsWithChildren<{
}>;


const MainTemplate: React.FC<PropsT> = ({ children }) => {
  const scrollPercent = useScrollPercent(); 

  return (
    <MainTemplateContainer>
      <MainTemplateHeader><HeaderConnected scrollPercent={scrollPercent} /></MainTemplateHeader>
      <MainTemplateBody>{children}</MainTemplateBody>
      <MainTemplateFooter><Footer /></MainTemplateFooter>
    </MainTemplateContainer>
  )
}

export default MainTemplate;
