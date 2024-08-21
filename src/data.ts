import p1 from './assets/p1.png';
import p10 from './assets/p10.png';
import p11 from './assets/p11.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import p9 from './assets/p9.png';

export const selectorItems: {
  img: string;
  title: string;
  titleBottomSheet: string;
  items: { id: number; title: string }[];
}[] = [
  {
    img: p1,
    items: [
      { id: 1, title: '1% за любые покупки + 7% в 4 категориях' },
      { id: 2, title: '7% в 5 категориях' },
      { id: 3, title: 'Ничего не выбираю' },
    ],
    title: 'Кэшбэк в рублях',
    titleBottomSheet: 'Выберите кэшбэк в рублях',
  },
  {
    img: p2,
    items: [
      { id: 4, title: '3 мили за каждые потраченные 100 рублей' },
      { id: 5, title: '5 миль за каждые потраченные 100 рублей' },
      { id: 6, title: 'Ничего не выбираю' },
    ],
    title: 'Кэшбэк в милях',
    titleBottomSheet: 'Выберите кэшбэк в милях',
  },
  {
    img: p3,
    items: [
      { id: 7, title: '2 поездки в месяц оформления и следующий календарный' },
      { id: 8, title: '2 поездки в год' },
      { id: 9, title: '12 поездок в год (до 2 в месяц)' },
      { id: 10, title: '15 поездок в год (до 3 в месяц)' },
      { id: 11, title: 'Ничего не выбираю' },
    ],
    title: 'Поездки за наш счёт (такси, каршеринг и трансфер)',
    titleBottomSheet: 'Сколько поездок вам нужно?',
  },
  {
    img: p4,
    items: [
      { id: 12, title: '2 визита в месяц оформления и следующий календарный' },
      { id: 13, title: '12 визитов в год (до 2 в месяц)' },
      { id: 14, title: '24 визитов в год (до 8 в месяц)' },
      { id: 15, title: 'Без ограничений' },
      { id: 16, title: 'Ничего не выбираю' },
    ],
    title: 'Визиты в бизнес-залы и рестораны в аэропортах',
    titleBottomSheet: 'Сколько визитов в бизнес-залы и рестораны в аэропортах вам нужно?',
  },
];

export const checkboxItems = [
  {
    id: 17,
    title: 'Страхование в путешествиях по России и за рубежом для всей семьи',
    img: p5,
  },
  {
    id: 18,
    title: 'Переводы и платежи без комиссии (по номеру телефона, карты или по реквизитам)',
    img: p6,
  },
  {
    id: 19,
    title: 'Снятие наличных в банкоматах любых банков без комиссии',
    img: p7,
  },
  {
    id: 20,
    title: 'Консьерж-сервис 24/7 (Юридическая, бухгалтерская и медицинская поддержка, сервисы для премиального стиля жизни)',
    img: p8,
  },
  {
    id: 21,
    title: 'Выпуск платёжного стикера',
    img: p9,
  },
  {
    id: 22,
    title: 'Металлическая карта',
    img: p10,
  },
  {
    id: 23,
    title: 'Надбавка к накопительному счёту',
    img: p11,
  },
];

export const halfMillionIds = [
  checkboxItems[0].id,
  checkboxItems[1].id,
  checkboxItems[2].id,
  checkboxItems[3].id,
  checkboxItems[4].id,
  checkboxItems[6].id,
  12,
  13,
  7,
  8,
  4,
  5,
  1,
  2,
];

export const threeMillionsIds = [checkboxItems[5].id, 14, 9];
export const twelveMillionsIds = [15, 10];

export const tenK = {
  alwaysIds: [4],
  ids: threeMillionsIds.concat(twelveMillionsIds),
};

export const hundredK = {
  alwaysIds: [checkboxItems[6].id, 4],
  ids: [
    checkboxItems[0].id,
    checkboxItems[1].id,
    checkboxItems[2].id,
    checkboxItems[3].id,
    checkboxItems[4].id,
    12,
    13,
    7,
    8,
    1,
    2,
  ],
  notIds: threeMillionsIds.concat(twelveMillionsIds),
};
export const twoHundredK = {
  ids: [14, 9],
  notIds: twelveMillionsIds,
};

export const hundredFiftyK = {
  alwaysIds: [5],
};

export const commission = {
  notIds: [checkboxItems[5].id, 13, 14, 15, 8, 9, 10],
  skipIds: [3, 6, 11, 16],
};
