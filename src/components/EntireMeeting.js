/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ViewDetails from './ViewDetails';
import UpdateModal from './UpdateModal';
import * as EntireMeetingStyle from '../style/EntireMeeinting.styles';

const cookie = new Cookies();

// eslint-disable-next-line react/prop-types
function EntireMeeting({ setDetailModalOpen, detailModalOpen }) {
  const [listArr, setListArr] = useState([]);
  const [meetingId, setMeetingId] = useState('');
  const [meetingName, setMeetingName] = useState('');
  const [meetingStart, setMeetingStart] = useState('');
  const [meetingEnd, setMeetingEnd] = useState('');
  const [attendList, setAttendList] = useState([]);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  console.log(listArr);

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
      .get('http://localhost:8080/meeting/all', {
        withCredentials: true,
        params
      })
      .then((res) => {
        console.log(res);
        const pCount = res.data.p_Meetings.totalPages;
        setPageCount(pCount);
        setListArr(res.data.p_Meetings.content);
      });
  };
  const meetingListClick = (item) => {
    setDetailModalOpen(true);
    setMeetingId(item.meetingId);
    setMeetingName(item.name);
    setMeetingStart(item.start);
    setMeetingEnd(item.end);
    const params = {
      start: item.start,
      meetingId: item.meetingId
    };
    axios
      .get('http://localhost:8080/meeting/detailPage', {
        headers: {
          Authorization: `Bearer ${cookie.get('JSESSIONID')}`
        },
        withCredentials: true,
        params
      })
      .then((res) => {
        console.log(res);
        setAttendList(res.data.detail.nameList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const params = {
      page: 0,
      size: 4
    };
    try {
      axios
        .get('http://localhost:8080/meeting/all', {
          headers: {
            Authorization: `Bearer ${cookie.get('JSESSIONID')}`
          },
          withCredentials: true,
          params
        })
        .then((res) => {
          console.log(res);
          const pCount = res.data.p_Meetings.totalPages;
          setPageCount(pCount);
          setListArr(res.data.p_Meetings.content);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <EntireMeetingStyle.ViewMeeting>
      <EntireMeetingStyle.ViewMeetingHeader>
        <h3>전체 일정</h3>
      </EntireMeetingStyle.ViewMeetingHeader>
      <EntireMeetingStyle.ListTable>
        <thead>
          <EntireMeetingStyle.ViewMeetingListTr>
            <td>No</td>
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
          {console.log(listArr)}
          {listArr.map((item) => (
            <tr key={item.meetingRoomId} onClick={() => meetingListClick(item)}>
              <td>{item.meetingId}</td>
              <td>
                <EntireMeetingStyle.MeetingRoomColorDiv>
                  <EntireMeetingStyle.MeetingRoomColor type={item.type} />
                  <span>{item.name}</span>
                </EntireMeetingStyle.MeetingRoomColorDiv>
              </td>
              <td>{item.start}</td>
              <EntireMeetingStyle.MeetingTime>
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
              <td>{`회의실${item.meetingRoomId}`}</td>
              <td>{item.createdBy}</td>
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
      {detailModalOpen && (
        <ViewDetails
          setDetailModalOpen={setDetailModalOpen}
          meetingId={meetingId}
          meetingName={meetingName}
          meetingStart={meetingStart}
          meetingEnd={meetingEnd}
          attendList={attendList}
          setUpdateModalOpenInDetail={setUpdateModalOpen}
        />
      )}
      {updateModalOpen && (
        <UpdateModal
          setUpdateModalOpen={setUpdateModalOpen}
          meetingId={meetingId}
        />
      )}
    </EntireMeetingStyle.ViewMeeting>
  );
}
export default EntireMeeting;
