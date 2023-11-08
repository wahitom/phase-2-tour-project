import React from 'react'
import { Button } from 'react-bootstrap'


const Destination = () => {
  const handleViewPackage = () => {
     alert('View Package button clicked');
  };
 
  return (
     <div className="beaches">
       <div className="image">
         <img src="https://imgs.search.brave.com/-yy_EnFpwxKUx57PC8V5z9jkJotplU9DNnxUhGP8C18/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hamtl/bnlhc2FmYXJpcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDUvYmVzdC1i/ZWFjaGVzLWluLW1v/bWJhc2EtYmcxLTEw/MjR4NjgzLndlYnA" alt="beaches" />
       </div>
       <div className="info">
         <h3>Mombasa North Coast</h3>
         <p>Diani / Ukunda, Malindi / Watamu, Lamu</p>
         <Button onClick={handleViewPackage}>View Package</Button>
       </div>
     </div>
  );
 };
 

export default Destination