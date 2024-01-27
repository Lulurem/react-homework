import "./AddPost.css";

function AddPost() {
  return (
    <div className="board-wrapper">
      <div className="board">
        <div className="board-title">
          <h1>후기 작성</h1>
          <button type="button"></button>
        </div>
        <div className="product-info">
          <img src="/board/product-img.jpg" alt="상품 이미지" />
          <span className="product-name">[풀무원] 탱탱쫄면 (4개입)</span>
        </div>
        <form className="board-form" method="post">
          <div className="subject">
            <label htmlFor="subject">제목</label>
            <input
              id="subject"
              type="text"
              placeholder="제목을 입력해 주세요"
            />
          </div>
          <div className="content">
            <label htmlFor="content">내용</label>
            <textarea
              id="content"
              type="text"
              placeholder="컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 식품 등의 표시광고에 대한 법률을 준수하고자 다음과 같은 부당한 상품평에 대해서는 별도 고지 없이 임시 대처, 비공개 전환, 삭제, 적립금 회수 등의 필요한 조치가 취해 질 수 있습니다."
            ></textarea>
          </div>
        </form>
        <div className="button-container">
          <button type="button">취소</button>
          <button type="submit" className="registration">
            등록
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
