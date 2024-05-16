
import React from 'react';
import './ModalForm.scss';

const ModalForm = ({ show, onClose, data }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Activity Form</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>ID:</label>
              <input type="text" value={data.id} readOnly />
            </div>
            <div className="form-group">
              <label>Activity ID:</label>
              <input type="text" value={data.activity_id} readOnly />
            </div>
            <div className="form-group">
              <label>Reason:</label>
              <input type="text" value={data.reason} readOnly />
            </div>
            <div className="form-group">
              <label>Created At:</label>
              <input type="text" value={data.createdAt} readOnly />
            </div>
            <div className="form-group">
              <label>Created By:</label>
              <input type="text" value={data.createdBy} readOnly />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
