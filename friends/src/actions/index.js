import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";

export const fetchData = () => {
  const request = axios.get('http://localhost:5000/api/friends');
  return (dispatch) => {
    dispatch({type: FETCHING});
    request.then(response => {
      dispatch({type: FETCHED, payload: response.data});
    }).catch(err => {
      dispatch({type:ERROR, payload: err});
    })
  }
}

export const saveData = friend => {
  const request = axios.post('http://localhost:5000/api/friends', friend);
  return (dispatch) => {
    dispatch({type: SAVING});
    request.then(response => {
      dispatch({type: SAVED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err});
    })
  }
}

export const updateData = (id, friend) => {
  const request = axios.put(`http://localhost:5000/api/friends/${id}`, friend);
  return (dispatch) => {
    dispatch({type: UPDATING});
    request.then(response => {
      dispatch({type: UPDATED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const deleteData = (id) => {
  const request = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return (dispatch) => {
    dispatch({type: DELETING});
    request.then(response => {
      dispatch({type: DELETED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
