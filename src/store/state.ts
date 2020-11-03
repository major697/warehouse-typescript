export type Items = {
  id: number
  title: string
  author: string
  created: string
}

export type State = {
  loading: boolean
  items: Items[]
}

export const state: State = {
  loading: false,
  items: [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      created: '30-08-2000',
    },
    {
      id: 2,
      title: 'Kamienie na szaniec',
      author: 'Aleksander Kamiński',
      created: '01-01-1943',
    },
    {
      id: 3,
      title: 'Ogniem i mieczem',
      author: 'Henryk Sienkiewicz',
      created: '01-01-1884',
    },
    {
      id: 4,
      title: 'Pan Tadeusz',
      author: 'Adam Mickiewicz',
      created: '28-06-1834',
    },
  ],
}
