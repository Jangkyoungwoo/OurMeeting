import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';

const FullCalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .fc {
    width: 95%;
  }
  //toolbar
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0;
    padding: 0 40px;
    background-color: #ffffff;
    height: 63px;
    font-weight: 600;
    font-size: 12px;
    line-height: 29px;
    color: white;
    border-radius: 20px 20px 0px 0px;
  }
  .fc-timeGridWeek-view.fc-view.fc-timegrid {
    background-color: #ffffff;
  }
  .fc-toolbar-chunk {
    display: flex;
    align-items: center;
  }
  .fc-toolbar-title {
    color: black;
  }
  .fc-prev-button.fc-button.fc-button-primary {
    background-color: white;
    padding: 4.8px;
    border-color: #a4b9d2;
  }
  .fc-next-button.fc-button.fc-button-primary {
    background-color: white;
    padding: 4.8px;
    border-color: #a4b9d2;
  }
  .fc-icon.fc-icon-chevron-left {
    color: #a4b9d2;
  }
  .fc-icon.fc-icon-chevron-right {
    color: #a4b9d2;
  }
  .fc-today-button.fc-button.fc-button-primary {
    background-color: white;
    padding: 4.8px;
    border-color: #a4b9d2;
    color: black;
  }
  //예약하기 버튼
  .fc-addEventButton-button.fc-button.fc-button-primary {
    background-color: #0594ff;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    padding: 10px;
  }

  .fc .fc-timegrid-col.fc-day-today {
    background-color: #f4f9fc;
  }
`;

// eslint-disable-next-line react/prop-types
function MyCalander({ setReserveButton, reserveButton }) {
  const modalBtn = () => {
    alert('버튼을 클릭했습니다');
    if (reserveButton) {
      setReserveButton(false);
    } else {
      setReserveButton(true);
    }
  };

  return (
    <FullCalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        customButtons={{
          addEventButton: {
            text: '예약 하기',
            click: modalBtn
          }
        }}
        headerToolbar={{
          left: 'prev title next today',
          center: '',
          right: 'addEventButton'
        }}
        events={[
          { title: '판매건수 : 23건', date: '2023-11-11' },
          { title: '판매건수 : 23건', date: '2023-11-13' }
        ]}
      />
    </FullCalendarContainer>
  );
}
export default MyCalander;
