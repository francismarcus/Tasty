export const createRecipe = (recipe) => {
    return (dispatch, getState) => {
        dispatch({ 
            type: 'NEW_RECIPE', 
            payload: recipe
        })
    }
}