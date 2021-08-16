export const TYPES = {
  SET_RESTAURANTS: 'restaurantes/SET_RESTAURANTS',
  SET_RESTAURANT: 'restaurantes/SET_RESTAURANT',
};

const initialState = {
  restaurants: [],
  restaurantSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SET_RESTAURANTS:
      return { ...state, restaurants: action.payload };

    case TYPES.SET_RESTAURANT:
      return { ...state, restaurantSelected: action.payload };

    default:
      return state;
  }
}

export function setRestaurants(restaurants) {
  return {
    type: TYPES.SET_RESTAURANTS,
    payload: restaurants,
  };
}

export function setRestaurant(restaurant) {
  return {
    type: TYPES.SET_RESTAURANT,
    payload: restaurant,
  };
}
