import axios from 'axios';
import { useEffect, useState } from 'react';
import AutoComplete from './AutoComplete/AutoComplete';
import * as UpdateModalStyle from '../style/UpdateModal.styles';

// eslint-disable-next-line react/prop-types
function UpdateModal({ setUpdateModalOpen, meetingId }) {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setUpdateModalOpen(false);
    }
  };
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

  const [list, setList] = useState([]);
  const [meetingEarlyVal, setMeetingEarlyVal] = useState([]);
  const [membersEarlyVal, setMembersEarlyVal] = useState([]);
  const [gType, setgType] = useState([]);
  const [attendeesId, setAttendeesId] = useState([]);
  const inputList = {
    inputMeetingName: '',
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

  inputList.inputMeetingName = `${meetingEarlyVal.name}`;
  inputList.inputDate = `${meetingEarlyVal.startDate}`;
  inputList.inputMeetingRoomId = `${meetingEarlyVal.meetingRoom}`;
  inputList.inputType = `${meetingEarlyVal.meetingType}`;
  inputList.inputStartHour = `${meetingEarlyVal.startHour}`;
  inputList.inputStartMin = `${meetingEarlyVal.startMinute}`;
  inputList.inputEndHour = `${meetingEarlyVal.endHour}`;
  inputList.inputEndMin = `${meetingEarlyVal.endMinute}`;
  const getList = async () => {
    try {
      const res = await axios.get('http://localhost:8080/meeting/reserve');
      setList(res.data.meetingRoomList);
      setgType(res.data.meetingType);
    } catch (error) {
      console.log(error);
    }
  };
  const getEarlyVal = async () => {
    const params = {
      meetingId: `${meetingId}`
    };
    try {
      const res = await axios.get('http://localhost:8080/meeting/update', {
        params
      });
      setMeetingEarlyVal(res.data.meeting);
      setMembersEarlyVal(res.data.members);
      console.log(res.data.meeting);
      console.log(res.data.members);
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
  const PostList = async () => {
    const start = `${inputList.inputDate}T${inputList.inputStartHour}:${inputList.inputStartMin}`;
    const end = `${inputList.inputDate}T${inputList.inputEndHour}:${inputList.inputEndMin}`;
    try {
      axios.post('http://localhost:8080/meeting/update', {
        id: Number(`${meetingId}`),
        name: inputList.inputMeetingName,
        membersId: inputList.inputMemberId,
        meetingRoomId: Number(`${inputList.inputMeetingRoomId}`),
        type: `${inputList.inputType}`,
        start: `${start}`,
        end: `${end}`,
        description: `${inputList.inputDescription}`
      });
    } catch (error) {
      console.log(error);
    }
  };
  const onCloseModalcon = (e) => {
    setUpdateModalOpen(false);
  };
  useEffect(() => {
    getList();
    getEarlyVal();
  }, []);

  return (
    <UpdateModalStyle.MainDiv onClick={onCloseModal}>
      <UpdateModalStyle.Div>
        <UpdateModalStyle.Header>
          <UpdateModalStyle.MainTitle>
            {inputList.inputMeetingName}
          </UpdateModalStyle.MainTitle>
          <UpdateModalStyle.Close onClick={onCloseModalcon} />
        </UpdateModalStyle.Header>
        <UpdateModalStyle.Form>
          <UpdateModalStyle.TextDiv>참석자</UpdateModalStyle.TextDiv>
          <AutoComplete getAttendees={getAttendees} width="545px" />
          <UpdateModalStyle.UpdateDiv>
            <UpdateModalStyle.TextLabel htmlFor="meetingRoomList">
              회의실
            </UpdateModalStyle.TextLabel>
            <UpdateModalStyle.Select
              id="meetingRoom"
              onChange={(event) => {
                inputList.inputMeetingRoomId = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {inputList.inputMeetingRoomId} 회의실
              </option>
              {list.map((li) => (
                <option
                  value={li.id}
                  defaultValue={list.defaultValue === li.value}
                >
                  {li.name}
                </option>
              ))}
            </UpdateModalStyle.Select>
          </UpdateModalStyle.UpdateDiv>
          <UpdateModalStyle.UpdateDiv>
            <UpdateModalStyle.TextLabel htmlFor="meetingRoomType">
              회의 유형
            </UpdateModalStyle.TextLabel>
            <UpdateModalStyle.Select
              id="meetingType"
              onChange={(event) => {
                inputList.inputType = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {meetingEarlyVal.meetingType}
              </option>
              {gType.map((typ) => (
                <option value={typ}>{typ}</option>
              ))}
            </UpdateModalStyle.Select>
          </UpdateModalStyle.UpdateDiv>
          <UpdateModalStyle.UpdateDiv>
            <UpdateModalStyle.TextSpan>회의 날짜</UpdateModalStyle.TextSpan>
            <UpdateModalStyle.TimeInput
              type="date"
              data-placeholder={inputList.inputDate}
              onChange={(event) => {
                inputList.inputDate = event.target.value;
              }}
            />
          </UpdateModalStyle.UpdateDiv>
          <UpdateModalStyle.UpdateDiv>
            <UpdateModalStyle.TextDiv htmlFor="meetingStart">
              회의 시작
            </UpdateModalStyle.TextDiv>
          </UpdateModalStyle.UpdateDiv>
          <UpdateModalStyle.UpdateDiv>
            <UpdateModalStyle.TimeSelect
              id="hour"
              onChange={(event) => {
                inputList.inputStartHour = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {inputList.inputStartHour}
              </option>
              {hourArr.map((hour) => (
                <option value={hour}>{hour}</option>
              ))}
            </UpdateModalStyle.TimeSelect>
            <span> : </span>
            <UpdateModalStyle.TimeSelect
              id="minute"
              onChange={(event) => {
                inputList.inputStartMin = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {inputList.inputStartMin}
              </option>
              {minuteArr.map((min) => (
                <option value={min}>{min}</option>
              ))}
            </UpdateModalStyle.TimeSelect>
            <UpdateModalStyle.TimeSelect
              id="hour"
              onChange={(event) => {
                inputList.inputEndHour = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {inputList.inputEndHour}
              </option>
              {hourArr.map((hour) => (
                <option value={hour}>{hour}</option>
              ))}
            </UpdateModalStyle.TimeSelect>
            <span> : </span>
            <UpdateModalStyle.TimeSelect
              id="minute"
              onChange={(event) => {
                inputList.inputEndMin = event.target.value;
              }}
            >
              <option value="" disabled selected>
                {inputList.inputEndMin}
              </option>
              {minuteArr.map((min) => (
                <option value={min}>{min}</option>
              ))}
            </UpdateModalStyle.TimeSelect>
          </UpdateModalStyle.UpdateDiv>
          <UpdateModalStyle.TextDiv>회의 내용</UpdateModalStyle.TextDiv>
          <UpdateModalStyle.TextArea
            placeholder={meetingEarlyVal.description}
            onChange={(event) => {
              inputList.inputDescription = event.target.value;
            }}
          />
          <UpdateModalStyle.Btn
            type="submit"
            value="예약수정"
            onClick={PostList}
          />
        </UpdateModalStyle.Form>
      </UpdateModalStyle.Div>
    </UpdateModalStyle.MainDiv>
  );
}
export default UpdateModal;
