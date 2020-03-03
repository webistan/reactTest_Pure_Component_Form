const initialState = {
    data: [
      {"value": "Course1", "label": "Course1", "children": 
        [
          {"value": "Short Reports", "label": "Short Reports"},
          {"value": "Annual Reports", "label": "Annual Reports"},
          {"value": "Presentations", "label": "Presentations"}
        ]
      },
      {"value": "Course2", "label": "Course2", "children": 
        [
          {"value": "Poetry", "label": "Poetry"},
          {"value": "Short Stories", "label": "Short Stories"},
          {"value": "Drama", "label": "Drama"}
        ]
      },
      {"value": "Course3", "label": "Course3", "children": 
        [
          {"value": "Web Development", "label": "Web Development"},
          {"value": "Desktop Software Development", "label": "Desktop Software Development"},
          {"value": "Research and Analysis", "label": "Research and Analysis"}
        ]
      }
    ]
  }

const dataReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GETDATA':
            return state
        default:
            return state
    }
}

export default dataReducer