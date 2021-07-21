import * as types from './ActionType';
import axios from 'axios';
import { EmojiPeople } from '@material-ui/icons';

const getEmp = (emps) =>({
    type: types.GET_EMPS,
    payload: emps,
});

const deletedEmp = () =>({
    type: types.DELETE_EMPS,
    
});

const AddEmp = (emps) =>({
    type: types.ADD_EMPS,
    payload: emps,
    
});

const GetSingleEmp = (emps) =>({
    type: types.GET_SINGLE_EMPS,
    payload: emps,
    
});

const UpdateEmp = (emps) =>({
    type: types.UPDATE_EMPS,
    payload: emps,
    
});


export const loadUsers = () => {
  return function (dispatch) {
    
    axios.get('http://localhost:3001/emp')
    .then((response)=>{
        console.log("response data is:", response);
        dispatch(getEmp(response.data));
    })
    .catch((error)=>{
        console.log("something is wrong", error);
    })
  }
}

export const deleteUsers = (id) => {
    return function (dispatch) {
      
      axios.delete(`http://localhost:3001/emp/${id}`)
      .then((response)=>{
          console.log("response data is:", response);
          dispatch(deletedEmp());
          dispatch(loadUsers());
      })
      .catch((error)=>{
          console.log("something is wrong", error);
      })
    }
  }

  export const addUsers = (emp) => {
    return function (dispatch) {
      
      axios.post(`http://localhost:3001/emp`,emp)
      .then((response)=>{
          console.log("response data is:", response);
          dispatch(AddEmp());
          dispatch(loadUsers());
      })
      .catch((error)=>{
          console.log("something is wrong", error);
      })
    }
  }

  export const getSingleUsers = (id) => {
    return function (dispatch) {
      
      axios.get(`http://localhost:3001/emp/${id}`)
      .then((response)=>{
          console.log("response data is:", response);
          dispatch(GetSingleEmp(response.data));
          //dispatch(loadUsers());
      })
      .catch((error)=>{
          console.log("something is wrong", error);
      })
    }
  }

  export const updateUsers = (emp, id) => {
    return function (dispatch) {
      
      axios.put(`http://localhost:3001/emp/${id}`, emp)
      .then((response)=>{
          console.log("response data is:", response);
          dispatch(UpdateEmp());
          dispatch(loadUsers());
      })
      .catch((error)=>{
          console.log("something is wrong", error);
      })
    }
  }