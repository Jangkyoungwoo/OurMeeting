/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { React, useState } from 'react';
import { Cookies } from 'react-cookie';
import * as ViewDetailsStyle from '../style/ViewDetailModal.styles';

const cookie = new Cookies();

// eslint-disable-next-line react/prop-types
function ViewDetails({
  setDetailModalOpen,
  meetingId,
  meetingName,
  meetingStart,
  meetingEnd,
  attendList,
  setUpdateModalOpenInDetail
}) {
  console.log(meetingId, meetingStart, meetingEnd);
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setDetailModalOpen(false);
    }
  };
  const onCloseModalcon = (e) => {
    if (e.target === e.currentTarget) {
      setDetailModalOpen(false);
    }
  };
  const date = new Date(
    `20${meetingStart.substring(0, 2)}-${Number(
      meetingStart.substring(3, 5)
    )}-${meetingStart.substring(6, 8)} ${meetingStart.substring(
      9,
      11
    )}:${meetingStart.substring(12, 14)}`
  );
  console.log(date);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const dayOfWeek = week[date.getDay()];

  const UpdateModalHandler = () => {
    setUpdateModalOpenInDetail(true);
    setDetailModalOpen(false);
  };

  return (
    // 모달창을 useRef로 잡아준다.
    <ViewDetailsStyle.MainDiv onClick={onCloseModal}>
      <ViewDetailsStyle.Div>
        <ViewDetailsStyle.HeaderDiv>
          <ViewDetailsStyle.HeaderDivName>{`${meetingId}회의실`}</ViewDetailsStyle.HeaderDivName>
          <ViewDetailsStyle.HeaderRightDiv>
            <ViewDetailsStyle.UpdateBtn
              type="button"
              onClick={UpdateModalHandler}
            >
              수정하기
            </ViewDetailsStyle.UpdateBtn>
            <ViewDetailsStyle.DeleteIcon onClick={onCloseModalcon} />
          </ViewDetailsStyle.HeaderRightDiv>
        </ViewDetailsStyle.HeaderDiv>
        <ViewDetailsStyle.BodyStartDiv>
          <div>{meetingName}</div>
          <div>{`${meetingStart.substring(
            0,
            8
          )} ${dayOfWeek} ${meetingStart.substring(8)} ~ ${meetingEnd.substring(
            8
          )}`}</div>
        </ViewDetailsStyle.BodyStartDiv>
        <ViewDetailsStyle.BodyDataDiv>
          <div>참석자</div>
          <ViewDetailsStyle.BodyDataInfo>
            {attendList.map((list, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ViewDetailsStyle.BodyDataInfoDiv key={index}>
                {list}
              </ViewDetailsStyle.BodyDataInfoDiv>
            ))}
          </ViewDetailsStyle.BodyDataInfo>
        </ViewDetailsStyle.BodyDataDiv>
        <ViewDetailsStyle.MeetingContentDiv>
          <div>회의 내용</div>
          <form>
            <ViewDetailsStyle.MeetingContentUl>
              <div>회의내용</div>
            </ViewDetailsStyle.MeetingContentUl>
          </form>
        </ViewDetailsStyle.MeetingContentDiv>
      </ViewDetailsStyle.Div>
    </ViewDetailsStyle.MainDiv>
  );
}
export default ViewDetails;
