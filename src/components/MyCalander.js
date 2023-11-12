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
  .fc-event.fc-event-start.fc-event-end.fc-event-future.fc-timegrid-event.fc-v-event {
    border: none;
    border-left: 5px solid #6e55ec;
  }
  .fc-event.fc-event-start.fc-event-end.fc-event-past.fc-timegrid-event.fc-v-event {
    border: none;
    border-left: 5px solid #6e55ec;
  }
  .fc-event-title.fc-sticky {
    font-weight: bold;
  }
`;

// eslint-disable-next-line react/prop-types
function MyCalander({ setReserveButton }) {
  const modalBtn = () => {
    setReserveButton((prev) => !prev);
  };

  return (
    <FullCalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        allDaySlot={false}
        events={[
          {
            title: '개발팀 1주차 회의',
            start: '2023-11-13T11:00:00',
            end: '2023-11-13T12:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발2팀 1주차 회의',
            start: '2023-11-15T08:00:00',
            end: '2023-11-15T11:30:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '기술 면접 진행',
            start: '2023-11-14T09:30:00',
            end: '2023-11-14T13:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발팀 코드 리뷰 회의',
            start: '2023-11-13T14:00:00',
            end: '2023-11-13T18:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '개발3팀 1주차 회의',
            start: '2023-11-16T09:30:00',
            end: '2023-11-16T13:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '개발팀 2주차 회의',
            start: '2023-11-20T17:00:00',
            end: '2023-11-20T18:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발2팀 2주차 회의',
            start: '2023-11-23T10:00:00',
            end: '2023-11-23T11:30:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '인성 면접 진행',
            start: '2023-11-22T09:30:00',
            end: '2023-11-22T14:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발팀 스크럼 회의',
            start: '2023-11-24T15:00:00',
            end: '2023-11-24T18:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '개발3팀 2주차 회의',
            start: '2023-11-21T09:30:00',
            end: '2023-11-21T13:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '자문회사 방문 예정',
            start: '2023-11-06T11:00:00',
            end: '2023-11-06T12:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: 'OurMeeting 기획',
            start: '2023-11-07T08:00:00',
            end: '2023-11-07T11:30:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '이사회 진행',
            start: '2023-11-08T09:30:00',
            end: '2023-11-08T13:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '웹퍼블리셔 리뷰 회의',
            start: '2023-11-10T14:00:00',
            end: '2023-11-10T18:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '개발 컨설팅 업체 컨택',
            start: '2023-11-10T09:30:00',
            end: '2023-11-10T13:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발팀 3주차 회의',
            start: '2023-11-27T11:00:00',
            end: '2023-11-27T12:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발2팀 3주차 회의',
            start: '2023-11-30T08:00:00',
            end: '2023-11-30T11:30:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발 1팀 프로그램 구축 회의',
            start: '2023-11-28T09:30:00',
            end: '2023-11-28T13:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '차세대 경영정보 시스템 구축 회의',
            start: '2023-11-28T14:00:00',
            end: '2023-11-28T18:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '보상시스템 회의',
            start: '2023-12-01T09:30:00',
            end: '2023-12-01T13:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '개발팀 1주차 회의',
            start: '2023-10-30T13:00:00',
            end: '2023-10-30T15:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '개발2팀 1주차 회의',
            start: '2023-10-31T08:00:00',
            end: '2023-10-31T14:30:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          },
          {
            title: '기술 면접 진행',
            start: '2023-11-01T10:30:00',
            end: '2023-11-01T13:00:00',
            backgroundColor: '#CFF3F9', // 배경 색상 설정
            borderColor: '#29C7E3',
            textColor: '#29C7E3' // 텍스트 색상 설정
          },
          {
            title: '개발팀 코드 리뷰 회의',
            start: '2023-11-02T14:00:00',
            end: '2023-11-02T18:00:00',
            backgroundColor: '#F2EEFF', // 배경 색상 설정
            textColor: '#6e55ec' // 텍스트 색상 설정
          },
          {
            title: '개발팀 1주차 회의',
            start: '2023-11-03T09:30:00',
            end: '2023-11-03T13:00:00',
            backgroundColor: '#EDFCF7', // 배경 색상 설정
            borderColor: '#25CC90',
            textColor: '#25CC90' // 텍스트 색상 설정
          }
        ]}
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
      />
    </FullCalendarContainer>
  );
}
export default MyCalander;
