
import React from 'react';
import './FormListModal.scss';

const FormListModal = ({ show, onClose, forms, onSelectForm }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Select a Form</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <ul className="form-list">
            {forms.map(form => (
              <li key={form.id} onClick={() => onSelectForm(form)}>
                Form ID: {form.id} - Reason: {form.reason}
              </li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button className="btn-close" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FormListModal;
