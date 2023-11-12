import axios from 'axios';
import { useEffect, useState } from 'react';
import AutoComplete from './AutoComplete/AutoComplete';
import * as ReservationMeetingStyle from '../style/ReservationMeeting.styles';

function ReservationMeeting() {
  const hourArr = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23'
  ];
  const minuteArr = ['00', '30'];
  const inputList = {
    inputMemberId: [],
    inputDate: '',
    inputMeetingRoomId: 0,
    inputType: '',
    inputStartHour: '',
    inputStartMin: '',
    inputEndHour: '',
    inputEndMin: '',
    inputDescription: ''
  };
  const [meetingName, setMeetingName] = useState([]);
  const [list, setList] = useState([]);
  const [gType, setgType] = useState([]);
  const [attendeesId, setAttendeesId] = useState([]);
  const getList = async () => {
    try {
      const res = await axios.get('http://localhost:8080/meeting/reserve');
      setList(res.data.meetingRoomList);
      setgType(res.data.meetingType);
    } catch (error) {
      console.log(error);
    }
  };
  const getAttendees = (card) => {
    setAttendeesId(card);
    attendeesId.map((item) => inputList.inputMemberId.push(Number(item.id)));
    const uniq = (arr) => [[...new Set(arr)]];
    const uniqArr = uniq(inputList.inputMemberId)[0];
    inputList.inputMemberId = uniqArr;
  };
  const postList = () => {
    const start = `${inputList.inputDate}T${inputList.inputStartHour}:${inputList.inputStartMin}`;
    const end = `${inputList.inputDate}T${inputList.inputEndHour}:${inputList.inputEndMin}`;
    axios
      .post('http://localhost:8080/meeting/reserve', {
        name: `${meetingName}`,
        membersId: inputList.inputMemberId,
        meetingRoomId: Number(`${inputList.inputMeetingRoomId}`),
        type: `${inputList.inputType}`,
        start: `${start}`,
        end: `${end}`,
        description: `${inputList.inputDescription}`
      })
      .then((res) => {
        if (window.confirm('정말 예약하시겠습니까?')) {
          window.location.reload();
        }
      });
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <ReservationMeetingStyle.EntireDiv>
      <ReservationMeetingStyle.Header>
        <ReservationMeetingStyle.MainTitle>
          예약하기
        </ReservationMeetingStyle.MainTitle>
      </ReservationMeetingStyle.Header>
      <ReservationMeetingStyle.Form>
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextLabel>
            회의명
          </ReservationMeetingStyle.TextLabel>
          <ReservationMeetingStyle.Input
            type="text"
            onChange={(event) => {
              setMeetingName(event.currentTarget.value);
            }}
          />
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.TextDiv>
          참석자
        </ReservationMeetingStyle.TextDiv>
        <AutoComplete getAttendees={getAttendees} width="390px" />
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextLabel htmlFor="meetingRoomList">
            회의실
          </ReservationMeetingStyle.TextLabel>
          <ReservationMeetingStyle.Select
            id="meetingRoom"
            onChange={(event) => {
              inputList.inputMeetingRoomId = event.target.value;
            }}
          >
            <option value="none" hidden />
            {list.map((li) => (
              <option
                value={li.id}
                defaultValue={list.defaultValue === li.value}
              >
                {li.name}
              </option>
            ))}
          </ReservationMeetingStyle.Select>
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextLabel htmlFor="meetingRoomType">
            회의 유형
          </ReservationMeetingStyle.TextLabel>
          <ReservationMeetingStyle.Select
            id="meetingType"
            onChange={(event) => {
              inputList.inputType = event.target.value;
            }}
          >
            <option value="none" hidden />
            {gType.map((typ) => (
              <option value={typ}>{typ}</option>
            ))}
          </ReservationMeetingStyle.Select>
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextSpan>
            회의 날짜
          </ReservationMeetingStyle.TextSpan>
          <ReservationMeetingStyle.TimeInput
            type="date"
            onChange={(event) => {
              inputList.inputDate = event.target.value;
            }}
          />
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextLabel htmlFor="meetingStart">
            회의 시작
          </ReservationMeetingStyle.TextLabel>
          <ReservationMeetingStyle.TimeSelect
            id="hour"
            onChange={(event) => {
              inputList.inputStartHour = event.target.value;
            }}
          >
            <option value="none" hidden />
            {hourArr.map((hour) => (
              <option value={hour}>{hour}</option>
            ))}
          </ReservationMeetingStyle.TimeSelect>
          <span> : </span>
          <ReservationMeetingStyle.TimeSelect
            id="minute"
            onChange={(event) => {
              inputList.inputStartMin = event.target.value;
            }}
          >
            <option value="none" hidden />
            {minuteArr.map((min) => (
              <option value={min}>{min}</option>
            ))}
          </ReservationMeetingStyle.TimeSelect>
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.Div>
          <ReservationMeetingStyle.TextLabel htmlFor="meetingFinish">
            회의 종료
          </ReservationMeetingStyle.TextLabel>
          <ReservationMeetingStyle.TimeSelect
            id="hour"
            onChange={(event) => {
              inputList.inputEndHour = event.target.value;
            }}
          >
            <option value="none" hidden />
            {hourArr.map((hour) => (
              <option value={hour}>{hour}</option>
            ))}
          </ReservationMeetingStyle.TimeSelect>
          <span> : </span>
          <ReservationMeetingStyle.TimeSelect
            id="minute"
            onChange={(event) => {
              inputList.inputEndMin = event.target.value;
            }}
          >
            <option value="none" hidden />
            {minuteArr.map((min) => (
              <option value={min}>{min}</option>
            ))}
          </ReservationMeetingStyle.TimeSelect>
        </ReservationMeetingStyle.Div>
        <ReservationMeetingStyle.TextDiv>
          회의 내용
        </ReservationMeetingStyle.TextDiv>
        <ReservationMeetingStyle.TextArea
          placeholder="회의 내용을 적어주세요"
          onChange={(event) => {
            inputList.inputDescription = event.target.value;
          }}
        />
        <ReservationMeetingStyle.Btn
          type="button"
          value="예약하기"
          onClick={postList}
        />
      </ReservationMeetingStyle.Form>
    </ReservationMeetingStyle.EntireDiv>
  );
}

export default ReservationMeeting;
