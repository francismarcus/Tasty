import { auth } from "Fire";

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
        });
      });
  };
};

export const login = (email, password) => {
  return dispatch => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth().currentUser;
        console.log(user);
      })
      .catch(error => console.error(error));
  };
};

export const logout = () => {
  return dispatch => {
    auth().signOut();
  };
};

export const setUserAction = user => {
  return {
    type: 'SET_USER',
    payload: user
  };
}
