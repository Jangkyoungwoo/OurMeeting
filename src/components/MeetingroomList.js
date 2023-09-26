import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import OurMeetingIcon from './OurMeetingIcon';
import * as MeetingroomListStyle from '../style/MeetingroomList.styles';

const cookie = new Cookies();

function MeetingroomList() {
  const [fav, setFav] = useState([]);
  const [nonFav, setNonFav] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const navigate = useNavigate();
  const getMeetingroom = async () => {
    try {
      const res = await axios.get('http://localhost:8080/meeting-rooms', {
        headers: {
          Authorization: `Bearer ${cookie.get('JSESSIONID')}`
        },
        withCredentials: true
      });
      setFav(res.data.fav);
      setNonFav(res.data.nonFav);
    } catch (error) {
      console.log(error);
    }
  };
  const postMeetingroom = async (meetingRoomId) => {
    try {
      axios
        .post('http://localhost:8080/meeting-rooms', {
          headers: {
            Authorization: `Bearer ${cookie.get('JSESSIONID')}`
          },
          withCredentials: true,
          meetingRoomId: `${meetingRoomId}`
        })
        .then((res) => {
          setFav(res.data.fav);
          setNonFav(res.data.nonFav);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleBtn = (event) => {
    const { id } = event.currentTarget;
    postMeetingroom(id);
  };
  const handleClickBtn = () => {
    setIsClick(!isClick);
    if (isClick) {
      navigate('/main/login');
    } else if (!isClick) {
      navigate('/mymeeting');
    }
  };

  useEffect(() => {
    getMeetingroom();
  }, []);
  return (
    <MeetingroomListStyle.List>
      <MeetingroomListStyle.MainTitle>
        <OurMeetingIcon />
        <h2>OUR MEETING</h2>
      </MeetingroomListStyle.MainTitle>
      <MeetingroomListStyle.ViewMeetingBtn
        type="button"
        onClick={handleClickBtn}
      >
        내 회의 보기
      </MeetingroomListStyle.ViewMeetingBtn>
      <MeetingroomListStyle.Title>자주 찾는 회의실</MeetingroomListStyle.Title>
      {fav.map((meetingroom) => (
        <MeetingroomListStyle.Element key={meetingroom.id}>
          <MeetingroomListStyle.ElementChild1>
            <IconButton id={meetingroom.id} onClick={handleBtn} disableRipple>
              <MeetingroomListStyle.FavBtn />
            </IconButton>
            <span>{meetingroom.name}</span>
          </MeetingroomListStyle.ElementChild1>
          <MeetingroomListStyle.ElementChild2>
            <MeetingroomListStyle.Dot />
          </MeetingroomListStyle.ElementChild2>
        </MeetingroomListStyle.Element>
      ))}
      {fav.length === 0 || nonFav.length === 0 ? null : (
        <MeetingroomListStyle.Hr />
      )}
      {nonFav.map((meetingroom) => (
        <MeetingroomListStyle.Element key={meetingroom.id}>
          <MeetingroomListStyle.ElementChild1>
            <IconButton
              id={meetingroom.id}
              onClick={handleBtn}
              disableElevation
              disableRipple
            >
              <MeetingroomListStyle.NonFavBtn />
            </IconButton>
            <span>{meetingroom.name}</span>
          </MeetingroomListStyle.ElementChild1>
          <MeetingroomListStyle.ElementChild2>
            <MeetingroomListStyle.Dot />
          </MeetingroomListStyle.ElementChild2>
        </MeetingroomListStyle.Element>
      ))}
    </MeetingroomListStyle.List>
  );
}

export default MeetingroomList;
