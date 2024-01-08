import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ITweet } from './timeline';
import { auth, db, storage } from '../firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Define styled.textarea outside the component
const TextArea = styled.textarea`
  border: 2px solid white;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  color: white;
  background-color: black;
  width: 100%;
  resize: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &::placeholder {
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }`


const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  background-color: #1d9bf0;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin-left: auto; /* Move photo to the right */
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 5px;
`;

const Payload = styled.p`
  margin: 0;
  font-size: 18px;
`;

const ActionButton = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
  border: 0;
  font-size: 12px;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export default function Tweet({ username, photo, tweet, userId, id, createdAt }: ITweet) {
  const user = auth.currentUser;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTweet, setEditedTweet] = useState(tweet);
  const [newPhoto, setNewPhoto] = useState(null);

  const onDelete = async () => {
    const ok = window.confirm('Are you sure?');

    if (!ok || user?.uid !== userId) return;

    try {
      await deleteDoc(doc(db, 'tweets', id));

      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const onEdit = () => {
    if (user?.uid !== userId) return;
    setIsEditing(true);
  };

  const onSaveEdit = async () => {
    if (user?.uid !== userId) return;

    try {
      await updateDoc(doc(db, 'tweets', id), {
        tweet: editedTweet,
        photo: newPhoto || photo, // 업데이트된 사진이 있으면 사용, 아니면 이전 사진 사용
      });
      setIsEditing(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onCancelEdit = () => {
    setEditedTweet(tweet);
    setIsEditing(false);
  };

  const onPhotoChange = () => {
    if (user?.uid !== userId) return;

    // 파일 선택 input을 클릭하여 파일 선택
    const input = document.getElementById('file-input');
    input.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      // 새로운 이미지를 storage에 업로드
      const storageRef = ref(storage, `tweets/${user.uid}/${id}`);
      await uploadBytes(storageRef, file);

      // 업로드된 이미지의 URL을 가져와서 데이터베이스에 저장
      const downloadURL = await getDownloadURL(storageRef);
      setNewPhoto(downloadURL);
    } catch (error) {
      console.error(error);
    }
  };

  // 업로드된 사진이 변경되면 newPhoto를 초기화
  useEffect(() => {
    setNewPhoto(null);
  }, [photo]);

  return (
    <Wrapper>
      <Column>
        <Username>{username}</Username>
        {isEditing ? (
          <>
            <TextArea value={editedTweet} onChange={(e) => setEditedTweet(e.target.value)} />
            <FileInput id="file-input" type="file" onChange={handleFileChange} />
            {photo && <FileLabel onClick={onPhotoChange}>Change Photo</FileLabel>}
          </>
        ) : (
          <Payload>{tweet}</Payload>
        )}
        <div>
          {user?.uid === userId && (
            <>
              {isEditing ? (
                <>
                  <ActionButton onClick={onSaveEdit}>Save</ActionButton>
                  <ActionButton onClick={onCancelEdit} style={{ backgroundColor: 'gray' }}>
                    Cancel
                  </ActionButton>
                </>
              ) : (
                <>
                  <ActionButton onClick={onEdit}>Edit</ActionButton>
                  <ActionButton onClick={onDelete}>Delete</ActionButton>
                </>
              )}
            </>
          )}
        </div>
      </Column>
      {photo && <div><Photo src={newPhoto || photo} /></div>}
    </Wrapper>
  );
}