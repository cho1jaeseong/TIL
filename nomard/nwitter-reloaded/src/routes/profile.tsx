import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { ITweet } from "../components/timeline";
import Tweet from "../components/tweet";
// import { Wrapper } from "../components/auth-components";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const AvatarUpload = styled.label`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #1d9bf0;
  transition: all 0.3s ease;

  svg {
    width: 50px;
  }

  &:hover {
    background-color: #155c8a;
    border: 2px solid #155c8a;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #1d9bf0;
`;

const AvatarInput = styled.input`
  display: none;
`;

const EditButton = styled.button`
  background-color: #1d9bf0;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #155c8a;
  }
`;

const Name = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #333;
`;

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
export default function Profile(){
    const [tweets,setTweets]=useState<ITweet[]>([])
    const user = auth.currentUser
    const [avatar,setAvatar] = useState(user?.photoURL)
    const [newName, setNewName] = useState(user?.displayName);
    const onEdit = async () => {
        // Edit 버튼을 눌렀을 때 사용자에게 새로운 이름을 입력받습니다.
        const newNameInput = prompt("Enter your new name:", user?.displayName);
        
        // 사용자가 이름을 입력하고 확인을 눌렀을 경우에만 새로운 이름을 설정합니다.
        if (newNameInput !== null) {
          setNewName(newNameInput);
    
          // 사용자 프로필 업데이트
          await updateProfile(user, { displayName: newNameInput });
        }
      };
    const onAvatarChange = async(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {files} = e.target
        if(!user) return
        if(files && files.length ===1){
            const file = files[0]
            const locationRef = ref(storage,`avatar/${user?.uid}`)
            const result = await uploadBytes(locationRef,file)
            const avatarUrl = await getDownloadURL(result.ref)
            setAvatar(avatarUrl)
            await updateProfile(user,{photoURL:avatarUrl})
        }
    }
    const fetchTweets = async()=>{
        const tweetQuery = query(
            collection(db,"tweets"),
            where("userId","==",user?.uid),
            orderBy("createdAt","desc"),
            limit(25)
        )
        const snapshot = await getDocs(tweetQuery)
        const tweets = snapshot.docs.map(doc =>{
            const {tweet,createdAt,userId,username,photo} = doc.data()
            return{
                tweet,
                createdAt,
                userId,
                username,
                photo,
                id:doc.id,
            }
        })
        setTweets(tweets)
    }
    useEffect(()=>{
        fetchTweets()
    },[])
    return (
        <Wrapper>
            <AvatarUpload htmlFor="avatar">
                {Boolean(avatar) ? <AvatarImg src={avatar}/> : <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>}
          
            </AvatarUpload>
            <AvatarInput onChange={onAvatarChange} id="avatar" type="file" accept="image/*"/>
            <EditButton onClick={onEdit}>Edit</EditButton>
            <Name>
                {user?.displayName ??"Anonymous"}
            </Name>
            <Tweets>
                {tweets.map(tweet => <Tweet key={tweet.id}{...tweet}/>)}
            </Tweets>
        </Wrapper>
    )

}
