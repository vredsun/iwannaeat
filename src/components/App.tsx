import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFound } from '../ui/organisms/NotFound/NotFound';
import MainTemplate from '../ui/templates/MainTemplate/MainTemplate';
import EatsListConnected from './EatsList/EatsList';
import { AddEatPage } from './NewEat/NewEat';

const App: React.FC = () => {
  return (
    <MainTemplate>
      <Routes>
          <Route path="/">
            <Route path="new" element={<AddEatPage />} />
            <Route path="suggest" element={<AddEatPage />} />
            <Route path="all">
              <Route index element={<EatsListConnected />} />
              <Route path=":id" element={<EatsListConnected />} />
            </Route>
            <Route
              index
              element={<Navigate to="/suggest" replace />}
            />
            <Route path="*" element={<NotFound />} />
          </Route> 
      </Routes>
    </MainTemplate>
  )
}

export default App;
