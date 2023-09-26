import styled from 'styled-components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const DeleteIcon = styled(DeleteForeverIcon)``;

export const DeleteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PagiNateDiv = styled.div`
  position: absolute;
  bottom: 5px;
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
