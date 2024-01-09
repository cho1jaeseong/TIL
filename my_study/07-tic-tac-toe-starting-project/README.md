# public에 사진 넣으면 이름만으로도 참조 가능
```javascript
<img src="./public/game-logo.png" alt=""/>
<img src="game-logo.png" alt=""/>
```

# 쫌더 짧은 코드 방법
```javascript
{isEditing ? <button onClick={onClick}>Save</button>  : <button onClick={onClick}>Edit</button>}
<button onClick={onClick}>{isEditing ? "Save" : "Edit"}</button>

setIsEditing(isEditing ? false : true)
setIsEditing(!isEditing )
```

# 주의
![Alt text](image.png)
1번 방식은 비추천
2번이 리액트가 추천 과거값을 기준으로 현재값을 설정할때 함수를 통하여 해야함
```javascript
const onClick = () =>{
        setIsEditing(!isEditing)

    }
const onClick = () =>{
        setIsEditing((editing)=> !editing)

    }

```