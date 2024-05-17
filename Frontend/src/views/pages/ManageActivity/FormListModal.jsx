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
          <button className='btnExit' onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
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
