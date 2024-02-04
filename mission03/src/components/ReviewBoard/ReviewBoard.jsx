import "./ReviewBoard.css";
import reviewData from "../../data/review-board.json";

export function ReviewNotice() {
  return (
    <div className="board-wrapper">
      <div className="notice">
        <span>공지</span>
        <p>금주의 베스트 후기 안내</p>
      </div>
      <div className="notice">
        <span>공지</span>
        <p>상품 후기 적립금 정책 안내</p>
      </div>
    </div>
  );
}

export function ReviewPost() {
  return (
    <>
      {reviewData.items.map(
        ({
          id,
          best,
          grade,
          name,
          product,
          contentTop,
          contentBottom,
          date,
        }) => (
          <div key={id} className="board-wrapper">
            <div className="registered-review">
              <div className="review-left">
                <span>{best}</span>
                <span>{grade}</span>
                <span>{name}</span>
              </div>
              <div className="review-right">
                <span>{product}</span>
                <span>
                  {contentTop} <br />
                  {contentBottom}
                </span>
                <span>{date}</span>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
