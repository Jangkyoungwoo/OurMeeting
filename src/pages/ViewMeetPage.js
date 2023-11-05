import axios from 'axios';
import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Cookies } from 'react-cookie';
import MyMeetingList from '../components/MyMeetingList';
import MeetingroomList from '../components/MeetingroomList';
import EntireMeeting from '../components/EntireMeeting';
import MyMeetingHeader from '../components/MyMeetingHeader';
import * as ViewMeetPageStyle from '../style/ViewMeetingPage.styles';

const cookie = new Cookies();
export const sendingSession = () => {
  if (sessionStorage.getItem('user_id') === null) {
    navigator('/');
  } else {
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
function ViewMeetPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [MydetailModalOpen, setMyDetailModalOpen] = useState(false);
  return (
    <Fragment key="key">
      <ViewMeetPageStyle.Div>
        <div>
          <MeetingroomList />
        </div>
        <ViewMeetPageStyle.MeetingDiv>
          <ViewMeetPageStyle.MeetingHeaderDiv>
            <MyMeetingHeader
              setModalOpen={setModalOpen}
              modalOpen={modalOpen}
            />
          </ViewMeetPageStyle.MeetingHeaderDiv>
          <ViewMeetPageStyle.MeetingListDiv>
            <EntireMeeting
              setDetailModalOpen={setDetailModalOpen}
              detailModalOpen={detailModalOpen}
            />
            <MyMeetingList
              setMyDetailModalOpen={setMyDetailModalOpen}
              MydetailModalOpen={MydetailModalOpen}
            />
          </ViewMeetPageStyle.MeetingListDiv>
        </ViewMeetPageStyle.MeetingDiv>
      </ViewMeetPageStyle.Div>
    </Fragment>
  );
}
export default ViewMeetPage;
