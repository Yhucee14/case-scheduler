import { useState } from 'react';
import CaseDetails from './CaseDetails';
import PropTypes from 'prop-types';

const CaseList = ({ mata, setMata }) => {
  const [search, setSearch] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isCaseDetailsVisible, setIsCaseDetailsVisible] = useState(false);

  const filteredCases = mata.filter((c) =>
    c.caseNumber.toLowerCase().includes(search.toLowerCase())
  );

  const handleToggleDetails = (c) => {
    if (selectedCase && selectedCase.caseNumber === c.caseNumber) {
      // Clicking on the selected case again hides the details
      setSelectedCase(null);
      setIsCaseDetailsVisible(false);
    } else {
      setSelectedCase(c);
      setIsCaseDetailsVisible(true);
    }
  };

  const handleDelete = (caseNumber) => {
    const updatedCases = mata.filter((c) => c.caseNumber !== caseNumber);
    localStorage.setItem('scheduledCases', JSON.stringify(updatedCases));
    setMata(updatedCases);

    // Hide the case details when a case is deleted
    setSelectedCase(null);
    setIsCaseDetailsVisible(false);
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      {/* <h2 className="text-2xl mb-4">Case List</h2> */}
      <input
        type="text"
        placeholder="Search for a case..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul>
        {filteredCases.map((c, index) => (
          <li key={index} className="mb-4 transition transform duration-200 hover:scale-105">
            <div className="flex justify-between items-center p-4 rounded bg-gray-100 shadow-md">
              <span
                onClick={() => handleToggleDetails(c)}
                className="cursor-pointer text-blue-500 font-semibold"
              >
                Case Number: {c.caseNumber}
              </span>
              <button onClick={() => handleDelete(c.caseNumber)} className="text-red-500 font-semibold">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {isCaseDetailsVisible && selectedCase && (
        <div className="mt-4">
          <CaseDetails mata={selectedCase} />
        </div>
      )}
    </div>
  );
};

CaseList.propTypes = {
  mata: PropTypes.array.isRequired,
  setMata: PropTypes.func.isRequired,
};

export default CaseList;
