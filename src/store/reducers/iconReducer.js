import iconActions from '../actions/iconActions'

const initState = {
  iconFormText: '',
  iconFormType: 'b',
  icons: [
    // { type: 'b', name: "twitter", desc: "Blah Blah Blah", uid: 1 },
    // { type: 'b', name: "instagram", desc: "Blah Blah Blah", uid: 2 },
    // { type: 's', name: "subway", desc: "Blah Blah Blah", uid: 3 },
    // { type: 's', name: "laptop", desc: "Cpmputer icon", uid: 4 },
    // { type: 'b', name: "microsoft", desc: "Microsoft icon", uid: 5 },
    // { type: 's', name: "glasses", desc: "Face icon", uid: 6 }
  ],
  data: [],
  iconSize: 24,
  color: "#bf56da"
}

const iconReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ICON': 
      return {
        ...state,
        icons: [
          ...state.icons,
          action.icon
        ]
      }
    case 'CHANGE_FONTSIZE': 
      return {
        ...state,
        iconSize: action.fontSize
      }
    case 'CHANGE_COLOR': 
      return {
        ...state,
        color: action.color
      }
    case 'DELETE_ICON':
      const icons = state.icons.filter((icon) => {
        return icon.uid !== action.uid;
      });
      console.log(state);
      
      return {
        ...state,
        icons: icons
      }
    case 'LOAD_DATA': 
      return {
        ...state,
        data: action.data
      }
    case 'EDIT_ICON_FORM_TEXT':
      console.log(state);
      return {
        ...state,
        iconFormText: action.text
      }
    case 'EDIT_ICON_FORM_TYPE':
      console.log(state);
      return {
        ...state,
        iconFormType: action.text
      }
    case 'CHANGE_ICON_DESC': 
      let newIcons = [];
      for (let i = 0; i < state.icons.length; i++) {
        if (state.icons[i].uid === action.uid) {
          let icon = {
            type: state.icons[i].type,
            uid: state.icons[i].uid,
            desc: action.desc,
            name: state.icons[i].name
          };
          newIcons.push(icon);
        } else {
          newIcons.push(state.icons[i]);
        }
      }
      return {
        ...state,
        icons: newIcons
      }
        
    default: 
      return state;
  }
}

export default iconReducer