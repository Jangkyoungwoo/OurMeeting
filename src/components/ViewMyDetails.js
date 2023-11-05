/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { React } from 'react';
import { Cookies } from 'react-cookie';
import * as ViewMyDetailModalStyle from '../style/ViewMyDetailModal.styles';

const cookie = new Cookies();

// eslint-disable-next-line react/prop-types
function ViewMyDetails({
  setMyDetailModalOpen,
  MymeetingId,
  MymeetingName,
  MymeetingStart,
  MymeetingEnd,
  MyattendList,
  setUpdateModalOpenInDetail
}) {
  console.log(MymeetingId, MymeetingStart, MymeetingEnd);
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setMyDetailModalOpen(false);
    }
  };
  const onCloseModalcon = (e) => {
    setMyDetailModalOpen(false);
  };
  const date = new Date(
    `20${MymeetingStart.substring(0, 2)}-${Number(
      MymeetingStart.substring(3, 5)
    )}-${MymeetingStart.substring(6, 8)} ${MymeetingStart.substring(
      9,
      11
    )}:${MymeetingStart.substring(12, 14)}`
  );
  console.log(date);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[date.getDay()];

  const UpdateModalHandler = () => {
    setMyDetailModalOpen(false);
    setUpdateModalOpenInDetail(true);
  };

  return (
    // 모달창을 useRef로 잡아준다.
    <ViewMyDetailModalStyle.MainDiv onClick={onCloseModal}>
      <ViewMyDetailModalStyle.Div>
        <ViewMyDetailModalStyle.HeaderDiv>
          <ViewMyDetailModalStyle.HeaderDivName>{`${MymeetingId}회의실`}</ViewMyDetailModalStyle.HeaderDivName>
          <ViewMyDetailModalStyle.HeaderRightDiv>
            <ViewMyDetailModalStyle.UpdateBtn
              type="button"
              onClick={UpdateModalHandler}
            >
              수정하기
            </ViewMyDetailModalStyle.UpdateBtn>
            <ViewMyDetailModalStyle.DeleteIcon onClick={onCloseModalcon} />
          </ViewMyDetailModalStyle.HeaderRightDiv>
        </ViewMyDetailModalStyle.HeaderDiv>
        <ViewMyDetailModalStyle.BodyStartDiv>
          <div>{MymeetingName}</div>
          <div>{`${MymeetingStart.substring(
            0,
            8
          )} ${dayOfWeek} ${MymeetingStart.substring(
            8
          )} ~ ${MymeetingEnd.substring(8)}`}</div>
        </ViewMyDetailModalStyle.BodyStartDiv>
        <ViewMyDetailModalStyle.BodyDataDiv>
          <ViewMyDetailModalStyle.ColorDiv>
            참석자
          </ViewMyDetailModalStyle.ColorDiv>
          <ViewMyDetailModalStyle.BodyDataInfo>
            {MyattendList.map((list, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ViewMyDetailModalStyle.BodyDataInfoDiv key={index}>
                {list}
              </ViewMyDetailModalStyle.BodyDataInfoDiv>
            ))}
          </ViewMyDetailModalStyle.BodyDataInfo>
        </ViewMyDetailModalStyle.BodyDataDiv>
        <ViewMyDetailModalStyle.MeetingContentDiv>
          <ViewMyDetailModalStyle.ColorDiv>
            회의 내용
          </ViewMyDetailModalStyle.ColorDiv>
          <form>
            <ViewMyDetailModalStyle.MeetingContentUl>
              <div>회의내용</div>
            </ViewMyDetailModalStyle.MeetingContentUl>
          </form>
        </ViewMyDetailModalStyle.MeetingContentDiv>
      </ViewMyDetailModalStyle.Div>
    </ViewMyDetailModalStyle.MainDiv>
  );
}
export default ViewMyDetails;
