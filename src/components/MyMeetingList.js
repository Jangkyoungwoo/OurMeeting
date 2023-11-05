/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-nested-ternary */
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ViewMyDetails from './ViewMyDetails';
import UpdateModal from './UpdateModal';
import * as EntireMeetingStyle from '../style/EntireMeeinting.styles';
import * as MyMeeingStyle from '../style/MyMeeting.styles';

const cookie = new Cookies();

// eslint-disable-next-line react/prop-types
function MyMeetingList({ setMyDetailModalOpen, MydetailModalOpen }) {
  const [listArr, setListArr] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [MymeetingID, setMyMeetingID] = useState('');
  const [MymeetingName, setMyMeetingName] = useState('');
  const [MymeetingStart, setMyMeetingStart] = useState('');
  const [MymeetingEnd, setMyMeetingEnd] = useState('');
  const [MyattendList, setMyAttendList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const changeAllCheck = (e) => {
    if (isCheckAll === false) {
      const allArr = listArr.map((item) => item.meetingId);
      setCheckedArr(allArr);
      setIsCheckAll(true);
      for (let i = 0; i < listArr.length; i++) {
        listArr[i].checked = true;
      }
    } else {
      setCheckedArr([]);
      setIsCheckAll(false);
      for (let i = 0; i < listArr.length; i++) {
        listArr[i].checked = false;
      }
    }
  };

  const checkingCheckedBox = (meetingId, e) => {
    if (e.target.checked === false) {
      const newArr = checkedArr.filter((item) => item !== meetingId);
      setCheckedArr(newArr);
    } else {
      setCheckedArr((prev) => [...prev, meetingId]);
    }
    if (isCheckAll === true) {
      setIsCheckAll(false);
      e.target.checked = false;
    }
  };
  const deleteList = () => {
    axios
      .post('http://localhost:8080/meeting/delete', {
        headers: {
          Authorization: `Bearer ${cookie.get('JSESSIONID')}`
        },
        withCredentials: true,
        meetingsId: checkedArr
      })
      .then((res) => {
        if (window.confirm('정말 삭제 하시겠습니까?')) {
          window.location.reload();
        }
      });
    setIsCheckAll(false);
    setCheckedArr([]);
  };
  function TotalMinut(item) {
    return (
      Number(item.end.substring(9, 11) * 60) +
      Number(item.end.substring(12, 14)) -
      (Number(item.start.substring(9, 11) * 60) +
        Number(item.start.substring(12, 14)))
    );
  }
  function EndSmallThanStartHour(item) {
    return Math.trunc(
      (24 * 60 -
        (Number(item.start.substring(9, 11) * 60) +
          Number(item.start.substring(12, 14))) +
        (Number(item.end.substring(9, 11) * 60) +
          Number(item.end.substring(12, 14)))) /
        60
    );
  }
  function EndSmallThanStartMinut(item) {
    return Math.trunc(
      (24 * 60 -
        (Number(item.start.substring(9, 11) * 60) +
          Number(item.start.substring(12, 14))) +
        (Number(item.end.substring(9, 11) * 60) +
          Number(item.end.substring(12, 14)))) %
        60
    );
  }
  function EndBigThanStartHour(item) {
    return Math.trunc(
      (Number(item.end.substring(9, 11) * 60) +
        Number(item.end.substring(12, 14)) -
        (Number(item.start.substring(9, 11) * 60) +
          Number(item.start.substring(12, 14)))) /
        60
    );
  }
  function EndBigThanStartMinut(item) {
    return Math.trunc(
      (Number(item.end.substring(9, 11) * 60) +
        Number(item.end.substring(12, 14)) -
        (Number(item.start.substring(9, 11) * 60) +
          Number(item.start.substring(12, 14)))) %
        60
    );
  }
  const handlePageClick = (data) => {
    setListArr([]);
    const params = {
      page: data.selected,
      size: 4
    };
    axios
      .get('http://localhost:8080/meeting/mymeeting', {
        withCredentials: true,
        params
      })
      .then((res) => {
        const pCount = res.data.p_MyMeetings.totalPages;
        setPageCount(pCount);
        setListArr(res.data.p_MyMeetings.content);
      });
  };

  const meetingListClick = (item) => {
    setMyDetailModalOpen(true);
    setMyMeetingID(item.meetingId);
    setMyMeetingName(item.name);
    setMyMeetingStart(item.start);
    setMyMeetingEnd(item.end);

    const params = {
      start: item.start,
      meetingId: item.meetingId
    };
    axios
      .get('http://localhost:8080/meeting/detailPage', {
        withCredentials: true,
        params
      })
      .then((res) => {
        console.log(res);
        setMyAttendList(res.data.detail.nameList);
      })
      .catch((err) => console.log(err));
  };

  const onCloseAllInput = () => {
    setMyDetailModalOpen(false);
  };
  const onCloseInput = () => {
    setMyDetailModalOpen(false);
  };

  useEffect(() => {
    const params = {
      page: 0,
      size: 4
    };
    axios
      .get('http://localhost:8080/meeting/mymeeting', {
        withCredentials: true,
        params
      })
      .then((res) => {
        console.log(res);
        const pCount = res.data.p_MyMeetings.totalPages;
        setPageCount(pCount);
        setListArr(res.data.p_MyMeetings.content);
      });
  }, []);
  return (
    <EntireMeetingStyle.ViewMeeting>
      <EntireMeetingStyle.ViewMeetingHeader>
        <h3>나의 예약</h3>
        <button type="button" onClick={deleteList}>
          <MyMeeingStyle.DeleteDiv>
            <MyMeeingStyle.DeleteIcon />
            <span>삭제</span>
          </MyMeeingStyle.DeleteDiv>
        </button>
      </EntireMeetingStyle.ViewMeetingHeader>
      <EntireMeetingStyle.ListTable>
        <thead>
          <EntireMeetingStyle.ViewMeetingListTr>
            <td>
              <input
                type="checkbox"
                onChange={(e) => changeAllCheck(e.target.checked)}
                checked={checkedArr.length === listArr.length}
                onClick={onCloseAllInput}
              />
            </td>
            <EntireMeetingStyle.ViewMeetingListTd>
              회의명
            </EntireMeetingStyle.ViewMeetingListTd>
            <td>회의 일시</td>
            <td>회의 시간</td>
            <td>회의실</td>
            <td>개설자</td>
          </EntireMeetingStyle.ViewMeetingListTr>
        </thead>
        <EntireMeetingStyle.ColorChangeBody>
          {listArr.map((item) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  onClick={(e) => {
                    checkingCheckedBox(item.meetingId, e);
                    onCloseInput();
                  }}
                  checked={!!checkedArr.includes(item.meetingId)}
                />
              </td>
              <td onClick={() => meetingListClick(item)}>
                <EntireMeetingStyle.MeetingRoomColorDiv>
                  <EntireMeetingStyle.MeetingRoomColor type={item.type} />
                  <span>{item.name}</span>
                </EntireMeetingStyle.MeetingRoomColorDiv>
              </td>
              <td onClick={() => meetingListClick(item)}>{item.start}</td>
              <EntireMeetingStyle.MeetingTime
                onClick={() => meetingListClick(item)}
              >
                {TotalMinut(item) < 0
                  ? EndSmallThanStartMinut(item) !== 0
                    ? `${EndSmallThanStartHour(
                        item
                      )}시간 ${EndSmallThanStartMinut(item)}분`
                    : `${EndSmallThanStartHour(item)}시간`
                  : EndBigThanStartMinut(item) !== 0
                  ? EndBigThanStartHour(item) !== 0
                    ? `${EndBigThanStartHour(item)}시간 ${EndBigThanStartMinut(
                        item
                      )}분`
                    : `${EndBigThanStartMinut(item)}분`
                  : `${EndBigThanStartHour(item)}시간`}
              </EntireMeetingStyle.MeetingTime>
              <td
                onClick={() => meetingListClick(item)}
              >{`회의실${item.meetingRoomId}`}</td>
              <td onClick={() => meetingListClick(item)}>{item.createdBy}</td>
            </tr>
          ))}
        </EntireMeetingStyle.ColorChangeBody>
      </EntireMeetingStyle.ListTable>
      <EntireMeetingStyle.PagiNateDiv>
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          nextClassName="page-item"
          activeClassName="active"
        />
      </EntireMeetingStyle.PagiNateDiv>
      {MydetailModalOpen && (
        <ViewMyDetails
          setMyDetailModalOpen={setMyDetailModalOpen}
          MymeetingId={MymeetingID}
          MymeetingName={MymeetingName}
          MymeetingStart={MymeetingStart}
          MymeetingEnd={MymeetingEnd}
          MyattendList={MyattendList}
          setUpdateModalOpenInDetail={setUpdateModalOpen}
        />
      )}
      {updateModalOpen && (
        <UpdateModal
          setUpdateModalOpen={setUpdateModalOpen}
          meetingId={MymeetingID}
        />
      )}
    </EntireMeetingStyle.ViewMeeting>
  );
}

export default MyMeetingList;
