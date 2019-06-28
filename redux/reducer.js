const initialState = {
  parallax: {
    mouseX: 0,
    mouseY: 0
  },
  section: {
    index: 0,
    anchor: ''
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOUSE_MOVE': 
      return Object.assign({}, state, {
        parallax: {
          mouseX: action.mouse.X,
          mouseY: action.mouse.Y
        }
      });
    default: 
      return state;
  }
}

export default reducer;