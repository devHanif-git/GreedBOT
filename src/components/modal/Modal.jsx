import React from "react";

const Modal = ({ showModal, setShowModal, setBatch, batches, year }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4 text-black">Select Batch</h2>
            <h1 className="text-l font-bold mb-4 text-black">
              YEAR {year.text}
            </h1>
            <ul>
              {batches.map((batch) => (
                <li key={batch.id} className="mb-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => {
                      setBatch(batch);
                      setShowModal(false);
                    }}
                  >
                    {batch.month}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 text-red-500 hover:underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
