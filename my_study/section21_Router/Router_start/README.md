## Router시작
npm install react-router-dom

# 기본적인 설정 하는법
```javascript
const router = createBrowserRouter([
  {path: "/", element:<HomePage/>},
  {path: "/product", element:<ProductHompage/>},

])

function App() {
  return <RouterProvider router={router}/>
}

```

# Link 사용
```javascript
<p>Go to <Link to="/products">the list of products</Link></p>
```


# 하위 객체 부르기 children사용
```javascript
export default function RootLayout(){
    return <>
        <h1>Root Layer</h1>
        <Outlet></Outlet>
    </>
}



 {
    path:"/",
    element:<RootLayout/>,
    children:[
      {path: "/", element:<HomePage/>},
     {path: "/products", element:<ProductHompage/>},
    ]
  }
  
```

# 동적 라우트 쓰기
:표시를 통해 동적 할당, 그 값을 받을때는 useParams사용하고 params.{:뒤에 적은거랑 동일}
```javascript
{path: "/products/:productID", element:<ProductDetailPage/>},


export default function ProductDetailPage(){
    const params = useParams()

    return<>
    <h1>Product Detail</h1>
    <p>{params.productID}</p>
    </> 
}
```
