export const addIcon = (icon) => {
  return (dispatch, getState) => {
    console.log(icon);
    dispatch({ type: 'ADD_ICON', icon });
  }
} 

export const fontChange = (fontSize) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CHANGE_FONTSIZE', fontSize });
  }
} 

export const colorChange = (color) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CHANGE_COLOR', color });
  }
} 

export const deleteIcon = (uid) => {
  return (dispatch, getState) => {
    dispatch({ type: 'DELETE_ICON', uid });
  }
} 

export const loadData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: 'LOAD_DATA', data })
  }
}

export const editIconFormText = (text) => {
  return (dispatch, getState) => {
    dispatch({ type: 'EDIT_ICON_FORM_TEXT', text })
  }
}

export const editIconFormType = (text) => {
  return (dispatch, getState) => {
    dispatch({ type: 'EDIT_ICON_FORM_TYPE', text })
  }
}

export const changeIconDesc = (uid, desc) => {
  return (dispatch, getState) => {
    dispatch({ type: 'CHANGE_ICON_DESC', uid, desc })
  }
}