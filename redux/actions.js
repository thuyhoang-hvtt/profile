export const mouseMove = mouse => {
  console.log('MOUSE_MOVE');
  return (dispatch, getState) => {
    dispatch({ type: 'MOUSE_MOVE', mouse })
  }
}