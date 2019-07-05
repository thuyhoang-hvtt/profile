export const mouseMove = mouse => {
  // console.log('MOUSE_MOVE');
  return (dispatch, getState) => {
    dispatch({ type: 'MOUSE_MOVE', mouse })
  }
}

export const changeSection = section => {
  // console.log('CHANGE_SECTION');
  return (dispatch, getState) => {
    dispatch({ type: 'CHANGE_SECTION', section })
  }
}