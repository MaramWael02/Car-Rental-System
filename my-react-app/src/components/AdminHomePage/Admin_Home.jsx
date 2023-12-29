import React , {useState} from "react";


const AdminHomePage = (props) => {
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Set the height of the container to occupy full viewport height
  };

  const buttonStyle = {
    margin: '0 5px', // Adjust margin between buttons
    // Add other styles as needed
  };

  const handleButtonClick = (buttonType) => {
    // Handle button click based on the buttonType (e.g., perform actions)
    console.log(`Button ${buttonType} clicked`);
    if (buttonType === 'Reports') {
      props.onFormSwitch('Reports');
    } else if (buttonType === 'AddCar') {
        props.onFormSwitch('AddCar');
        }
  };

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={() => handleButtonClick('Reports')}>
        Reports
      </button>
      <button style={buttonStyle} onClick={() => handleButtonClick('AddCar')}>
        Add Car
      </button>
    </div>
  );
};

export default AdminHomePage;
