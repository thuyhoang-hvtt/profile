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
    case 'CHANGE_SECTION': 
      return Object.assign({}, state, {
        section: {
          index: action.section.index,
          anchor: action.section.anchor
        }
      })
    default: 
      return state;
  }
}

export default reducer;