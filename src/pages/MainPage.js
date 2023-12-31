import axios from 'axios';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MeetingroomList from '../components/MeetingroomList';
import ReservationMeeting from '../components/ReservationMeeting';
import MyCalander from '../components/MyCalander';
import * as ViewMeetPageStyle from '../style/ViewMeetingPage.styles';
import CalendarHeader from '../components/CalendarHeader';

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
      {reserveButton ? (
        ''
      ) : (
        <div>
          <MeetingroomList />
        </div>
      )}

      <Div>
        <ViewMeetPageStyle.MeetingHeaderDiv>
          <CalendarHeader setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </ViewMeetPageStyle.MeetingHeaderDiv>
        <MyCalander setReserveButton={setReserveButton} />
      </Div>
      {reserveButton && (
        <div>
          <ReservationMeeting />
        </div>
      )}
    </MainDiv>
  );
}
const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f1f5f8;
`;
const Div = styled.div`
  width: 100%;
`;
export default MainPage;
