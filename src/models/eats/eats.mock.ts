import { EatData } from './models';
import imgUrl from './snack.jpeg';

let id = 0;

const exHashRecord = {
  'breakfast': 'Завтрак',
  'lunch': 'Обед',
  'dinner': 'Ужин',
  'supper': 'Поздний ужин',
  'snack': 'Перекус',
  '10min': '10 мин',
}

const getRandomHashTags = (value: number) => Object.values(exHashRecord).slice(0, value);

const generateRandomEat = (): EatData => {
  id++;

  const localId = id.toString();
  const rating = Number((Math.random() * 10).toFixed()) % 5 + 1;

  return {
    id: localId,
    title: `Вкусный бутерброд`,
    imgUrl: imgUrl,
    rating,
    hashTagsSet: new Set(getRandomHashTags(rating)),
  }
}
  

export const eatsMockData: Array<EatData> = [
  ...(Array.from({ length: 20 }).map(() => generateRandomEat()))
]
