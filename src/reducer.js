
export const ACTION_TYPES ={
    CHANGE_FEATURED : "CHANGE_FEATURED",
    LOAD_LAST_CLICKED:"LOAD_LAST_CLICKED"
  }


export const reducer = (state,action)=>{
    switch(action.type){
        case ACTION_TYPES.CHANGE_FEATURED:{
          const {film} =  action.payload 
          return {
            ...state,
            TendingNow:[film,...state.TendingNow.filter(item=>item.Id != film.Id)],
            Featured:{
              ...film,
              "CoverImage": "FeaturedCoverImage.png",
            },
          }
        }
        case ACTION_TYPES.LOAD_LAST_CLICKED:{
          const {url} = action.payload
          let lastclicked = state.TendingNow.find(item=>item.VideoUrl == url)
          return{
            ...state,
            TendingNow:[lastclicked,...state.TendingNow.filter(item=>item.VideoUrl != url)]
          } 
        }
        default: return state;
      }
}


