import React, { useState, useEffect } from 'react';
import Modal from "./componente/Modal";
import { IoIosMenu } from "react-icons/io";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    setModalOpen(false); // Certifique-se de que a modal esteja fechada inicialmente no lado do servidor
  }, []);

  return (
    <main>
      <div className="background">
        <div className="tab-navigate">
          <IoIosMenu className="Menu-icon" onClick={openModal} />
        </div>
      </div>
      {typeof window !== 'undefined' && ( // Renderizar apenas no lado do cliente
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h1>Conteúdo da Modal</h1>
        </Modal>
      )}
    </main>
  );
}