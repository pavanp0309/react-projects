// src/components/RemarkList.js
import React, { useState } from 'react';
import RemarkOverlay from './RemarkOverlay';

const RemarkList = () => {
  const [remarks, setRemarks] = useState([
    { id: 1, text: "First remark", time: "2024-09-25 10:00", action: null, comment: "" },
    { id: 2, text: "Second remark", time: "2024-09-25 11:00", action: null, comment: "" },
    { id: 3, text: "Third remark", time: "2024-09-25 11:00", action: null, comment: "" },
  ]);

  const [selectedRemark, setSelectedRemark] = useState(null);

  const handleRemarkClick = (remark) => {
    setSelectedRemark(remark);
  };

  const updateRemark = (updatedRemark) => {
    setRemarks((prevRemarks) =>
      prevRemarks.map((remark) =>
        remark.id === updatedRemark.id ? updatedRemark : remark
      )
    );
    setSelectedRemark(null); // Close the overlay after updating
  };

  return (
    <div className="container mt-5 ">
      <h2 className="text-center mb-4">Remarks List</h2>
      <table className="table table-striped shadow  table-bordered  table-hover table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Remark</th>
            <th>Time</th>
            <th>Action</th>
            <th>Comment</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {remarks
            .sort((a, b) => new Date(a.time) - new Date(b.time))
            .map((remark, index) => (
              <tr key={remark.id}>
                <td>{index + 1}</td>
                <td>{remark.text}</td>
                <td>{remark.time}</td>
                <td>{remark.action || "No Action"}</td> {/* Display the action */}
                <td>{remark.comment || "No Comment"}</td> {/* Display the comment */}
                <td className='text-center'>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleRemarkClick(remark)}
                  >
                    View Remark
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {selectedRemark && (
        <RemarkOverlay
          remark={selectedRemark}
          updateRemark={updateRemark} // Pass the update function to the overlay
          closeOverlay={() => setSelectedRemark(null)}
        />
      )}
    </div>
  );
};

export default RemarkList;
