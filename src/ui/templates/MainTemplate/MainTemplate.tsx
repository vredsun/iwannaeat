import { PropsWithChildren, useState } from 'react';
import Footer from '../../../components/Footer/Footer';
import HeaderConnected from '../../../components/Header/Header';
import MainTemplateBody from './styled/Body';
import MainTemplateContainer from './styled/Container';
import MainTemplateFooter from './styled/Footer';
import MainTemplateHeader from './styled/Header';

type PropsT = PropsWithChildren<{
}>;

const MIN_SCROLL = 50;

const MainTemplate: React.FC<PropsT> = ({ children }) => {
  const [scrollPercent, setScrollPercent] = useState(0)
  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement
    
    const { scrollTop } = target;

    const scrollTopMin = Math.min(scrollTop, MIN_SCROLL);

    setScrollPercent(scrollTopMin / MIN_SCROLL)
  }

  console.log({ scrollPercent })

  return (
    <MainTemplateContainer onScroll={handleScroll}>
      <MainTemplateHeader><HeaderConnected scrollPercent={scrollPercent} /></MainTemplateHeader>
      <MainTemplateBody>{children}</MainTemplateBody>
      <MainTemplateFooter><Footer /></MainTemplateFooter>
    </MainTemplateContainer>
  )
}

export default MainTemplate;
