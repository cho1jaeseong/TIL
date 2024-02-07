import { useState } from 'react'
import style from './HelpWrite.module.css';
import useStore from '../../store/helpDetailData';
import { useNavigate  } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


function HelpWrite() {
  const { sendPostBulletin } = useStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  // 여러장의 사진을 보여주기 위한 state
  const [showImages, setShowImages] = useState([]);
  const [ showNow, setShowNow] = useState([]);
  //  401: 도와줘요, 402: 도와줄게요, 403: 도와줬어요
  const [ codeSmall, setCodeSmall ] = useState(401);
  const [ point, setPoint ] = useState(100);

  // 이미지 미리보기를 위한 상대경로
  const handleAddImages = (e) => {
    const imageLists = e.target.files;
    if (imageLists.length + showImages.length > 10) {
      alert('이미지는 최대 10개까지 업로드 가능합니다.');
      return;
    }

    const imageUrlLists = [...showNow];
    for (let i = 0; i < imageLists.length; i++) {
      const imageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(imageUrl);
    }
    
    // 보여줄 이미지들 => URL
    setShowNow(imageUrlLists);
    setShowImages([...showImages, ...imageLists]);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력값이 있는지 확인
    if (!title) {
      alert('제목을 입력해주세요');
      return; // 함수를 여기서 종료하여 데이터 전송을 중지합니다.
    }
  
    if (!content) {
      alert('내용을 입력해주세요');
      return; // 함수를 여기서 종료하여 데이터 전송을 중지합니다.
    }

      // 서버로 보낼 묶음
  const boardHelp = {
    codeSmallId: codeSmall,
    title: title,
    content: content, 
    point: point,
  };
  
    const Bulletin = new FormData();
    // 게시글 정보를 JSON 문자열로 변환하여 Bulletin 추가
    Bulletin.append('boardHelp', new Blob([JSON.stringify(boardHelp)], { type: "application/json" }));

      // 이미지 파일 추가
  showImages.forEach((file) => {
    Bulletin.append('imageFileList', file);
  });
  console.log(showImages)

  // useStore의 sendPostBulletin 함수를 호출하여 FormData 전송
  try {
    await sendPostBulletin(Bulletin); // 비동기 호출
    navigate('/help'); // 성공 시 페이지 이동
  } catch (error) {
    console.error("게시글 등록 실패:", error);
    alert("게시글 등록에 실패했습니다.");
  }
};

    // X버튼 클릭 시 이미지 삭제하는 함수
    const handleDeleteImage = (id) => {
      setShowImages(showImages.filter((_, index) => index !== id));
      setShowNow(showNow.filter((_, index) => index !== id));
      console.log(showImages)
      console.log(showNow)

    };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 카테고리선택 */}
        <div>
          <input
            type="radio"
            id="needHelp"
            name="codeSmall"
            value={401}
            checked={codeSmall === 401}
            onChange={() => setCodeSmall(401)}
          />
          <label htmlFor="needHelp">도와줘요</label>

          <input
            type="radio"
            id="willHelp"
            name="codeSmall"
            value={402}
            checked={codeSmall === 402}
            onChange={() => setCodeSmall(402)}
          />
          <label htmlFor="willHelp">도와줄게요</label>
        </div>

        {/* 제목 입력 */}
        <div>
          <label htmlFor="title">제목:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 콘텐트 입력 */}
        <div>
          <label htmlFor="content">본문:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 포인트 입력 */}
        <div>
          <label htmlFor="pointRange">포인트 설정: {point}</label>
          <input
            type="range"
            id="pointRange"
            min={50}
            max={500}
            step={50}
            value={point}
            onChange={(e) => setPoint(Number(e.target.value))}
          />
        </div>

        {/* 이미지 업로드 */}
        <div>
          <label htmlFor="imageUploa">이미지 업로드:</label>
          <input onChange={handleAddImages} id="image" type="file" multiple />
        </div>

        {/* 보내기버튼 */}
        <button type="submit" className={style.submitButton}>
          글 등록
        </button>
      </form>

      {/* 이미지 미리보기 툴 */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: false }}
        style={{ width: '100px%', height: '100px' }}
      >
        {showNow.map((image, id) => (
          <SwiperSlide key={id}>
            <img
              src={image}
              alt={`image-${id}`}
              style={{ width: '80%', height: '100%', objectFit: 'cover' }}
            />
            <button onClick={() => handleDeleteImage(id)}>X</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HelpWrite;
