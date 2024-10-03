// src/components/RemarkOverlay.js
import React, { useState } from 'react';

const RemarkOverlay = ({ remark, updateRemark, closeOverlay }) => {
  const [comment, setComment] = useState(remark.comment || '');
  const [validationError, setValidationError] = useState(false); // For validation messages

  const handleActionClick = (actionType) => {
    if (comment.trim() === '') {
      setValidationError(true); // Show error if comment is empty
      return;
    }

    const currentTime = new Date().toLocaleString();

    const updatedRemark = {
      ...remark,
      action: actionType,
      comment: comment,
      time: currentTime,
    };

    updateRemark(updatedRemark);
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '50%' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Remark Action</h5>
            <button type="button" className="close btn" onClick={closeOverlay}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{remark.text}</p>
            <textarea
              className="form-control"
              placeholder="Please enter your comments here"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                if (validationError) setValidationError(false); // Reset validation error
              }}
            />
            {validationError && (
              <p className="text-danger mt-2">Please enter a comment before submitting.</p>
            )}
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-success"
              onClick={() => handleActionClick('Return')}
              disabled={!comment.trim()} // Disable if comment is empty
            >
              Return
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleActionClick('Defer')}
              disabled={!comment.trim()} // Disable if comment is empty
            >
              Defer
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleActionClick('Decline')}
              disabled={!comment.trim()} // Disable if comment is empty
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemarkOverlay;
