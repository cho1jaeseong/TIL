# 코드
```javascript
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {`${reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are going to build!`}
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />  
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
```
컴포넌트화 해서 사용 + 동적 할당{`${}`}
컴포넌트화 해서 재사용이 가능

```Javascript
{CORE_CONCEPTS.map((concept) => <CoreConcept  {...concept} />)}
{CORE_CONCEPTS.map((concept) => <CoreConcept title={concept.title} description={concept.description} image={concept.image} />)}

function CoreConcept( {title,description,image}) {
  return (<li>
    <img src={image} alt="..." />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>)
}


```
Props 개녕 사용 (컴포넌트로 데이터 전달)
map을 사용하여 중복되는 컴포넌트 처리 (미리 데이터를 받아놓던가 관리 해야 쓰기 쉬움 , key 넘겨줘야함) ... 을통하여 넘기기 가능
props를 받기

한파일에 너무 많은 컴포넌트 X componenet폴더를 통해서 관리 Css또한 다르게 관리 가능 But Scope 를 조절 잘해야함
Header.css 는 Header.jsx에 import 되어 있지만 App.jsx에 <header>를 만들어도 똑같이 적용이 되는 문제 

```javascript
    <TabButton>
        Component
    </TabButton>

export default function TabButton({children}){
    
    return (<li><button>{children}</button> </li>);
}

```
이렇게 컴포넌트 사이에 값을 넣는걸 컴포넌트 합성이라 함



```javascript
     <TabButton label="Components" /> 

export default function TabButton({label}){
    
    return (<li><button>{label}</button> </li>);
}
```
이런 방법도 가능 