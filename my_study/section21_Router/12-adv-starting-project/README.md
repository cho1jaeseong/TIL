## 난이도 최상
path: ":id",
이렇게 변수로 받아온 값들 사용할려면 저렇게 useParams 사용해야 가능
```javascript
const params = useParams()
```


# 라우터 연결
맨처음 설계가 중요, loader,action을 잘 구분해서 사용함 
loader가 같은 것을 사용할때는 id값과 loader를 상위 페이지에 넣고 하위 children에 부를수 있음 
```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          { path: "", element: <EventsPage />, loader: eventsLoader },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: "edit", element: <EditEventPage />, action: manipulateEventAction },
            ]
          },
          { path: "new", element: <NewEventPage />, action: manipulateEventAction },

        ]
      },
    ]
  }
])

```
정리할것도 많고 난의도도 높아서 다시 강의 들어야 할것 같음