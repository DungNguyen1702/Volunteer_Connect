
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
          <h2>Activity Deletion Form</h2>
          <button className="btnExit" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
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
              <input type="text" value={data.name} readOnly />
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
