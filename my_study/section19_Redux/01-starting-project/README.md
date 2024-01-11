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

store에 존재하는 값들은 기존의 값을 지우고 새로 덮는것
따라서 관심없는 값들도 정의 해줘야함 2번째 방식도 작동하나 좋은 방법은 아님 (1번 방식만 사용)
```javascript
return {
            counter : state.counter+1,
            showCounter:state.showCounter,
        },


state.counter++
return {
    counter : state.counter+1,
    showCounter:state.showCounter,
}

```

변수 전달
```javascript
 const increaseHandler=()=>{
    dispatch({type:"increase",amount : 5})
  }

  else if(action.type ==="increase"){
        return {
            counter:state.counter+action.amount,
            showCounter:state.showCounter,
        }
    }
```


## Redux-toolkit  
1. 초기값 설정
2. createSlice를 통해 reducers 생성 하고 각 함수 안에  변화하는 방식을 알려줌
```javascript
const initialCounterState ={counter :0,showCounter:true}

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        increase(state,action){
            state.counter=state.counter+action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },
    }
})

```
다른곳에서 사용하기
1. dispatch 만들기 
2. 사용할 인자 부르기(state)
3. 함수 정의하기 dispatch(action.함수)


```javascript

 const isAuth = useSelector(state=> state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const logOutHandler = ()=>{
    dispatch(authActions.logout())
  }

```