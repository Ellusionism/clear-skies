import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function DeleteUserButton() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const deleteUser = () => {
    dispatch({
      type: 'DELETE_USER',
      payload: user.id,
    });
  };

  return (
    <div className="text-center">
      <button
      type="button"
      className="btn btn-danger"
      data-mdb-toggle="modal"
      data-mdb-target="#deleteUserModal"
      >Delete My Account</button>
    <div
    className="modal fade"
    id="deleteUserModal" tabindex="-1"
    aria-labelledby="deleteUserModalLabel"
    aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
            className="modal-title"
            id="deleteUserModalLabel"
            >Are you sure?</h5>
            <button
            type="button"
            className="btn-close"
            data-mdb-dismiss="modal"
            aria-label="Close"></button>
          </div>
          <p
          className="modal-body"
          >This action is irreversible, and all data associated with your account will be permanently deleted.</p>
          <div className="modal-footer">
            <button
            type="button"
            className="btn btn-outline-danger"
            data-mdb-dismiss="modal"
            >Close</button>
            <button
            type="button"
            className="btn btn-danger"
            data-mdb-dismiss="modal"
            onClick={deleteUser}
            >Continue</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DeleteUserButton;