export const assetUrl = (path: string) => `./${path}`

export const clubConfig = {
  name: 'Gamer Cave',
  brandPrimary: 'Gamer',
  brandSecondary: 'Cave',
  initials: 'GC',
  slogan: 'Играй глубже',
  category: 'Компьютерный клуб',
  city: 'Краснодар',
  addressShort: 'Карасунская, 81',
  addressFull: 'Краснодар, ул. Карасунская, 81',
  districtLabel: 'Центр Краснодара',
  scheduleShort: '24/7',
  scheduleFull: 'Круглосуточно, ежедневно',
  phoneLabel: 'Уточняется перед публикацией',
  phoneHref: null as string | null,
  hero: {
    lineOne: 'Твоя игра',
    lineTwo: 'начинается',
    accent: 'глубже',
    lead: 'Игровое пространство с характером: мощные станции, приватные зоны и круглосуточный доступ.',
    image: assetUrl('photos/main-hall.png'),
    imageWidth: 919,
    imageHeight: 645,
  },
  links: {
    twoGis: 'https://2gis.ru/krasnodar/firm/70000001104519509/38.973371%2C45.028125/tab/reviews?m=38.973371%2C45.028125%2F18.11',
  },
} as const
