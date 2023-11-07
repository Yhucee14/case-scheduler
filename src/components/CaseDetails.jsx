import PropTypes from 'prop-types';

const CaseDetails = ({ mata }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-4">
      <h2 className="text-2xl font-semibold mb-4">Case Details</h2>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold ">Case Suit:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.suit}</p>
      </div>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold">Plaintiff:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.plaintiff}</p>
      </div>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold">Defendant:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.defendant}</p>
      </div>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold">Date:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.date}</p>
      </div>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold">Time:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.time}</p>
      </div>
      <div className="mb-2 flex flex-row">
        <p className="text-lg font-semibold">Court:</p>
        <p className="text-gray-700 px-2 text-lg">{mata.court}</p>
      </div>
    </div>
  );
};

CaseDetails.propTypes = {
  mata: PropTypes.shape({
    suit: PropTypes.string.isRequired,
    plaintiff: PropTypes.string.isRequired,
    defendant: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    court: PropTypes.string.isRequired,
  }).isRequired,
};

export default CaseDetails;
