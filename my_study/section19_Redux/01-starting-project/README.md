# redux 설치
npm install redux redux-react
초기 설정
```javascript
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);





const { createStore } = require("redux");

const counterReducer = (state ={counter :0},action)=>{
    if(action.type==="increment"){
        return {
            counter : state.counter+1
        }
    }
    else if(action.type ==="decrement"){
        return {
            counter:state.counter-1
        }
    }
    return state
}

const store = createStore(counterReducer)

export default store

```

store에 등록하고 실제로 사용

```javascript
const counter = useSelector(state=> state.counter)

const incrementHandler =() =>{
    dispatch({type:"increment"})
  }
```