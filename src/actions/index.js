export const createRecipe = recipe => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      const firestore = getFirestore();
      firestore
        .collection("recipes")
        .add({
          ...recipe
        })
        .then(() => {
          dispatch({
            type: "NEW_RECIPE",
            payload: recipe
          })
        });
    };
  };
  