import { useState } from 'react';
import CaseList from './CaseList';
import CaseScheduler from './CaseScheduler';
import AnimatedText from './AnimatedText'

const Dashboard = () => {
  // Initialize 'mata' with data from localStorage
  const [mata, setMata] = useState(() => {
    const savedCases = localStorage.getItem('scheduledCases');
    return savedCases ? JSON.parse(savedCases) : [];
  });

  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="bg-black text-white py-2">
        <AnimatedText text="Court Case Scheduling System" className='xx:text-2xl sm:text-3xl z-10 font-semibold text-center text-white' />

      </header>
      <main className="container mx-auto p-2 ">
        <div className="grid xx:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <section className="xx:col-span-1 sm:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 xx:text-center ">Schedule a New Case</h2>
            <CaseScheduler mata={mata} setMata={setMata} />
          </section>
          <section className="xx:col-span-1 sm:col-span-1 md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-center">Case List</h2>
            <CaseList mata={mata} setMata={setMata} />
          </section>

        </div>



      </main>
      <footer className="bg-black text-white p-2 mt-3">
        <AnimatedText text="OKONKWO EMMANUEL CHUKWUKA" className='xx:text-2xl sm:text-3xl z-10 font-semibold text-center text-white' />
        <h1 className='xx:text-2xl sm:text-3xl z-10 font-semibold text-center py-2 text-white'>2019030190298 </h1>
      </footer>
    </div>
  );
};

export default Dashboard;
