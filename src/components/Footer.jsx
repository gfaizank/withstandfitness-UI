import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Withstand Fitness</h1>
        <p className="text-sm">&copy; {new Date().getFullYear()} Withstand Fitness. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
