import styled from 'styled-components';

export const ViewMeeting = styled.div`
  position: relative;
  width: 95%;
  bottom: 0px;
  background: #ffffff;
  border-radius: 12px;
  background-color: white;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ViewMeetingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  & h3 {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-size: 23px;
    line-height: 23px;
  }
  & button {
    color: #6c6c6c;
    background-color: white;
    padding: 10px 33px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const ListTable = styled.table`
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  font-size: 20px;
  overflow: hidden;
  border-radius: 10px;

  & th {
    padding: 20px;
  }
  & td {
    padding: 20px;
  }
`;

export const ViewMeetingListTr = styled.tr`
  background-color: #f9f9fb;
  border-collapse: collapse;

  & td {
    color: rgba(0, 0, 0, 0.5);
    width: 20%;
  }
  & td:nth-child(1) {
    width: 30px;
  }
`;
export const ViewMeetingListTd = styled.td`
  width: 300px;
  padding: 0px;
`;
export const MeetingTime = styled.td`
  color: #0594ff;
  font-weight: bolder;
`;
export const ColorChangeBody = styled.tbody`
  & tr:hover {
    background-color: aliceblue;
  }
`;

export const MeetingRoomColorDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 40px;
`;

export const MeetingRoomColor = styled.div`
  left: -90px;
  width: 10px;
  height: 10px;
  background-color: ${(props) => {
    let MeetingColor = '';
    switch (props.type) {
      case 'A_Type':
        MeetingColor = '#17C2E0';
        break;
      case 'B_Type':
        MeetingColor = '#5F44EA';
        break;
      case 'C_Type':
        MeetingColor = '#08EB9A';
        break;
      default:
        alert('어떤 유형의 type인지 정해지지 않았습니다...');
    }
    return MeetingColor;
  }};
  margin-right: 15px;
`;
export const PagiNateDiv = styled.div`
  left: 40%;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    margin-right: 100px;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    margin: 10px;
    border-radius: 50%;
  }
  & ul.pagination li:hover {
    cursor: pointer;
    background-color: #17c2e0;
    opacity: 50%;
    color: white;
  }
  & ul.pagination li:first-child:hover {
    background-color: white;
  }
  & ul.pagination li:first-child a:hover {
    color: #337ab7;
  }
  & ul.pagination li:last-child:hover {
    background-color: white;
  }
  & ul.pagination li:last-child a:hover {
    color: #337ab7;
  }

  & ul.pagination li:first-child {
    border-radius: 50%;
  }

  & ul.pagination li:last-child {
    border-radius: 50%;
  }

  & ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }

  & ul.pagination li.active a {
    color: white;
  }

  & ul.pagination li.active {
    background-color: #17c2e0;
    opacity: 80%;
  }

  & ul.pagination li a:hover,
  & ul.pagination li a.active {
    color: white;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;
