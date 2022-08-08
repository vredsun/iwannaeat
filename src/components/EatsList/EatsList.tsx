import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectEatsList } from '../../models/eats/selectors';
import EatCard from '../../ui/organisms/EatCard/EatCard';
import EatsList from '../../ui/organisms/EatsList/EatsList';

const EatsListConnected: React.FC = () => {
  const eatsList = useSelector(selectEatsList);
  const { id } = useParams();

  return (
    <EatsList>
      {
        !id && <div>list</div>
      }
      {
        id && <div>{id}</div>
      }
      {
        eatsList.map(eat => (
          <EatCard key={eat.id} eat={eat} />
        ))
      }
    </EatsList>
  )
}

export default EatsListConnected;
