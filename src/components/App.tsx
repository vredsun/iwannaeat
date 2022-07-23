import { Route, Routes } from 'react-router-dom';
import MainTemplate from '../ui/templates/MainTemplate/MainTemplate';
import EatsListConnected from './EatsList/EatsList';

const App: React.FC = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<EatsListConnected />} />
      </Routes>
    </MainTemplate>
  )
}

export default App;
