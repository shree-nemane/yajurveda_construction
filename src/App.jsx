import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import PopupForm from "./components/Form/PopupForm";

const App = () => {

  const [showModal, setShowModal] = useState(true);

  // optional: show modal only once per browser using localStorage
  useEffect(() => {
    const seen = localStorage.getItem("seenPopup");
    if (seen === "1") setShowModal(false);
  }, []);

  const handleClose = () => {
    localStorage.setItem("seenPopup", "1"); // optional
    setShowModal(false);
  };

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* Main content always renders behind modal */}
        <main>
          <Home />
          {/* other main site components */}
        </main>

        {/* Modal renders on top */}
        {showModal && <PopupForm onClose={handleClose} />}
      </div>
    </>
  )
}

export default App