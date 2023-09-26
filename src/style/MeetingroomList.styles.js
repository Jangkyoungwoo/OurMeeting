import styled from 'styled-components';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';

export const List = styled.div`
  width: 250px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  border: 1px solid white;
  background-color: white;
  height: 100vh;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0px 30px 23px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 800;
`;
export const ViewMeetingBtn = styled.button`
  margin-left: 20px;
  margin-right: 20px;
  padding: 15px 60px;
  border-radius: 10px;
  border: solid 1.9px #0594ff;
  color: #0594ff;
  background-color: white;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 16px;
  &:hover {
    background-color: #f9fdff;
    & > span {
      color: #0594ff;
    }
  }
`;
export const Title = styled.h5`
  margin-top: 54px;
  margin-bottom: 24px;
  margin-left: 28px;
  color: #666666;
  font-size: 14px;
  font-weight: 500;
`;
export const Hr = styled.hr`
  border: 1px solid #dee2ec;
  margin: 8px 14px 8px 14px;
`;

export const Element = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  align-items: center;
  color: #333333;
  font-weight: 400;
  justify-content: space-between;
  &:hover {
    border-left: solid 3px #0594ff;
    background-color: #f9fdff;
    & > span {
      color: #0594ff;
    }
  }
`;

export const ElementChild1 = styled.div`
  display: flex;
  align-items: center;
`;

export const ElementChild2 = styled.div`
  margin-right: 14px;
  color: #a4b9d2;
  font-size: xx-small;
`;
export const FavBtn = styled(StarRoundedIcon)`
  color: #0594ff;
  margin-left: 28px;
  margin-right: 11px;
`;

export const NonFavBtn = styled(StarOutlineRoundedIcon)`
  color: #dee2ec;
  margin-left: 28px;
  margin-right: 11px;
  font-size: 16px;
`;

export const Dot = styled(MoreHorizSharpIcon)`
  font-size: xx-small;
`;
