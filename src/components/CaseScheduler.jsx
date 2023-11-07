import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CaseScheduler = ({ mata, setMata }) => {
    const [newCase, setNewCase] = useState({
        caseNumber: '',
        suit: '', // Changed from "type" to "suit"
        date: '',
        time: '',
        court: '',
        plaintiff: '', // Corrected the casing to "Plaintiff"
        defendant: '', // Added "defendant" property
    });

    // Load scheduled cases from localStorage when the component mounts
    useEffect(() => {
        const savedCases = localStorage.getItem('scheduledCases');
        if (savedCases) {
            setMata(JSON.parse(savedCases));
        }
    }, [setMata]);

    const handleCaseSubmit = () => {
        // Add the new case to the existing cases
        const updatedCases = [...mata, newCase];
        setMata(updatedCases);

        // Save the updated cases to localStorage
        localStorage.setItem('scheduledCases', JSON.stringify(updatedCases));

        setNewCase({
            caseNumber: '',
            suit: '',
            date: '',
            time: '',
            court: '',
            plaintiff: '', // Reset to an empty string
            defendant: '', // Reset to an empty string
        });
    };

    return (
        <div className="bg-gray-100 p-4 border rounded shadow-md">
            <h2 className="text-2xl mb-4 flex justify-center">Case Scheduler</h2>
            <form className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Case Number"
                    value={newCase.caseNumber}
                    onChange={(e) => setNewCase({ ...newCase, caseNumber: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Suit"
                    value={newCase.suit}
                    onChange={(e) => setNewCase({ ...newCase, suit: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Plaintiff"
                    value={newCase.plaintiff}
                    onChange={(e) => setNewCase({ ...newCase, plaintiff: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Defendant"
                    value={newCase.defendant}
                    onChange={(e) => setNewCase({ ...newCase, defendant: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={newCase.date}
                    onChange={(e) => setNewCase({ ...newCase, date: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="time"
                    placeholder="Time"
                    value={newCase.time}
                    onChange={(e) => setNewCase({ ...newCase, time: e.target.value })}
                    className="p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Court"
                    value={newCase.court}
                    onChange={(e) => setNewCase({ ...newCase, court: e.target.value })}
                    className="p-2 border rounded"
                />
                <button type="button" onClick={handleCaseSubmit} className="bg-black font-semibold text-white hover:bg-blue-500 hover:text-white p-2 rounded">
                    Schedule Case
                </button>
            </form>
        </div>
    );
};

CaseScheduler.propTypes = {
    mata: PropTypes.array.isRequired,
    setMata: PropTypes.func.isRequired,
};

export default CaseScheduler;
