/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import {LOAD_PRODUCTS,ADD_TO_SAVE} from '../actions';

const initialState = {
  products: [
    {
      _id: '1',
      name: 'Pushpa',
      releaseYear: 2001,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg',
    },
    {
      _id: '2',
      name: 'Dear Comrade',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:  'https://static.toiimg.com/photo/msid-70406377/70406377.jpg?176147',
    },
    {
      _id: '3',
      name: 'K.F.G',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:  'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/1106748-kgf-chapter-2-to-get-p_1200x768-sixteen_nine.jpeg?size=948:533',
    },
    {
      _id: '4',
      name: 'Shiddat',
      releaseYear: 1999,
      certificate: 'A',
      runtime: '139 min',
      genre: 'Drama',
      imdbRating: 8.8,
      overview: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      metaScore: '66',
      director: 'David Fincher',
      imageUrl:  'https://static.toiimg.com/photo/86284625.cms',
    },
  ],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        products: [...state.products, action.products],
      };
      case ADD_TO_SAVE:
        return {
          products: [
            ...state.products,
            action.products,
        ],
        };
    default:
      return state;
  }
};

export default ProductReducer;
