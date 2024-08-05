import React from 'react';
import axiosInstance from '../../axios';

function Soumission({ formId }) {
  const handlePrint = async () => {
    if (!formId) {
      alert('Form ID is not available.');
      return;
    }

    try {
      const response = await axiosInstance.get(`/formulaires/print/${formId}`);
      const printWindow = window.open('', '', 'height=800,width=1000');
      printWindow.document.open();
      printWindow.document.write(response.data);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    } catch (error) {
      alert('Error fetching printable format. Please try again later.');
      console.error('Error fetching printable format:', error);
    }
  };

  return (
    <div className="info-box" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
      <h2>
        Formulaire soumis avec <span>succès <img src="../assets/svg/title-effect.svg" className="img-fluid" alt="title-effect" /></span>
      </h2>
      <p>
        Merci d'avoir soumis votre formulaire. Nous avons reçu toutes vos informations et nous vous contacterons si nécessaire. Vous pouvez consulter un récapitulatif de votre soumission ou revenir à l'accueil pour créer un nouveau formulaire.
      </p>
      <button className="btn-solid" onClick={handlePrint} aria-label="Print Form">Print Form</button>
    </div>
  );
}

export default Soumission;
