import axios from 'axios';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetingroomList from '../components/MeetingroomList';
import ReservationMeeting from '../components/ReservationMeeting';
import MyMeetingHeader from '../components/MyMeetingHeader';

const cookie = new Cookies();

export const sendingSession = () => {
  const navigate = useNavigate();
  if (sessionStorage.getItem('user_id')) {
    axios
      .get('http://localhost:8080/main', {
        headers: {
          Authorization: `Bearer ${cookie.get('JSESSIONID')}`
        },
        withCredentials: true
      })
      .then((res) => console.log(res));
  }
};
function MainPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [reserveButton, setReserveButton] = useState(false);
  useEffect(() => {
    try {
      sendingSession();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <MainDiv>
      <div>
        <MeetingroomList />
      </div>
      <div>
        <ReservationMeeting />
      </div>
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export default MainPage;
