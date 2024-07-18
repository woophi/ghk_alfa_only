import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import p9 from './assets/p9.png';
import p10 from './assets/p10.png';
import p11 from './assets/p11.png';

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
    ],
    title: 'Кэшбэк рублями',
    titleBottomSheet: 'Выберите кэшбэк рублями',
  },
  {
    img: p2,
    items: [
      { id: 3, title: '3 мили за каждые 100 рублей любых покупок' },
      { id: 4, title: '5 миль за каждые 100 рублей любых покупок' },
    ],
    title: 'Кэшбэк милями',
    titleBottomSheet: 'Выберите кэшбэк милями',
  },
  {
    img: p3,
    items: [
      { id: 5, title: '2 в месяц оформления и следующий календарный' },
      { id: 6, title: '2 в год' },
      { id: 7, title: '12 в год (до 2 в месяц)' },
      { id: 8, title: '15 в год (до 3 в месяц)' },
    ],
    title: 'Поездки за наш счёт (такси, каршеринг и трансферы)',
    titleBottomSheet: 'Выберите поездки за наш счёт (такси, каршеринг и трансферы)',
  },
  {
    img: p4,
    items: [
      { id: 9, title: '2 в месяц оформления и следующий календарный' },
      { id: 10, title: '12 в год (до 2 в месяц)' },
      { id: 11, title: '24 в год (до 8 в месяц)' },
      { id: 12, title: 'Без ограничений' },
    ],
    title: 'Визиты в бизнес-залы и рестораны в аэропортах',
    titleBottomSheet: 'Выберите визиты в бизнес-залы и рестораны в аэропортах',
  },
];

export const vipIds = [7, 8, 11, 12, 18];

export const visibleSpendings = [
  {
    mln: 1.5,
    ths: 100,
    ids: [1, 2, 3, 5, 6, 9, 10, 13, 14, 15, 16, 17, 19],
    notIds: [7, 11, 8, 12, 18],
  },
  {
    mln: 3,
    ths: 200,
    ids: [7, 11],
    notIds: [8, 12],
  },
  {
    mln: 1.5,
    ths: 150,
    ids: [4],
    notIds: [18],
  },
  {
    mln: 3,
    ths: 0,
    ids: [18],
    notIds: [19, 3, 4],
  },
  {
    mln: 3,
    ths: 100,
    ids: [18, 19],
    notIds: [3, 4],
  },
  {
    mln: 3,
    ths: 10,
    ids: [18, 3],
    notIds: [19, 4],
  },
  {
    mln: 3,
    ths: 150,
    ids: [18, 4],
    notIds: [19, 3],
  },
  {
    mln: 12,
    ths: 0,
    ids: [8, 12],
    notIds: [],
  },
];

export const checkboxItems = [
  {
    id: 13,
    title: 'Страхование в путешествиях для всей семьи (по РФ и за границу)',
    img: p5,
  },
  {
    id: 14,
    title: 'Переводы (по номеру телефона / карты / реквизитов)',
    img: p6,
  },
  {
    id: 15,
    title: 'Снятия в банкоматах любых банков',
    img: p7,
  },
  {
    id: 16,
    title: 'Консьерж сервис 24/7 (Лайфстайл / Юридическая / Бухгалтерская / Медицинская поддержка)',
    img: p8,
  },
  {
    id: 17,
    title: 'Выпуск платежного стикера',
    img: p9,
  },
  {
    id: 18,
    title: 'Металлическая карта',
    img: p10,
  },
  {
    id: 19,
    title: 'Надбавка к накопительному счету',
    img: p11,
  },
];
