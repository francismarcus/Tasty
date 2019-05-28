
const recipeReducer = (state = [], action) => {
    switch (action.type) {
      case 'NEW_RECIPE':
        return {
          ...state, 
            recipes: 
              [...state.recipes, // => copy the nested object 
                 action.payload] 
            }
      default: 
        return state;
    }
};

export default recipeReducer;