export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const featureReducer = (state=initialState, action) => {
switch (action.type) {
  // I have to set up default right away its need for the swtich
  // This will return my initialstate so that state is always what I expected it to be
    case 'ADD_FEATURE':

      // we add return an obj bec with reducers we want to return 
      //state so this obj matches initialState's shape

        return {
            ...state,

            additionalPrice: state.additionalPrice + action.payload.price,

            // this is removing the features I clicked on into features

            additionalFeatures: state.additionalFeatures.filter((item) => {
              return item.id !== action.payload.id
            }),

            car: {
              //all properties from the car obj
              ...state.car,
              // this is me adding my arg from my onClick
              //this is the thing I want to add to features
               features:[...state.car.features, action.payload]}
        };
        case 'REMOVE_FEATURE':
          return {
            additionalPrice: state.additionalPrice - action.payload.price,

            additionalFeatures: [...state.additionalFeatures, action.payload],

            car: state.car.features.filter((item) => {
              return item.id !== action.payload.id
 
            })
          }
        default:
          return state;
      }

  }

