import { createContext ,useCallback,useEffect,useReducer} from 'react';
import './App.css';
import Menu from './Components/Menu';
import MovieApp from './Components/MovieApp';
import Data from "./data.json"
import { reducer, ACTION_TYPES } from './reducer';

const initialState ={
  ...Data,
}
export const DataContext = createContext(initialState)

function App() {

  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    if(sessionStorage.getItem("lastUrl")){
      loadLastClicked(sessionStorage.getItem("lastUrl"))
    }
  },[])
    
    const changeFeatured = useCallback ((film)=>{
      dispatch({
        type:ACTION_TYPES.CHANGE_FEATURED,
        payload:{
            film:film,
        }
      })
    },[])
    const loadLastClicked = useCallback((url)=>{
      dispatch({
        type:ACTION_TYPES.LOAD_LAST_CLICKED,
        payload:{
          url:url
        }
      })
    },[])
  

  return (
    <div className="App">
      <DataContext.Provider value={
        {
          state:state,
          changeFeatured:changeFeatured,
        }
      }>
        <Menu />
        <MovieApp />
      </DataContext.Provider>
    </div>
  );
}

export default App 
