import React from "react";


const AdminHomePage = (props) => {

  const handleButtonClick = (buttonType) => {
    // Handle button click based on the buttonType (e.g., perform actions)
    console.log(`Button ${buttonType} clicked`);
    if (buttonType === 'Reports') {
      props.onFormSwitch('Reports');
    } else if (buttonType === 'AddCar') {
        props.onFormSwitch('AddCarpage');
        }
  };

  return (
    <div >
      <img alt="background of a car" src="../images/bg_1.jpg" className="background_image" />
      <form  className="Admin_page" >
      <button onClick={() => handleButtonClick('Reports')}>
        Reports
      </button>
      <button onClick={() => handleButtonClick('AddCar')}>
        Add Car
      </button>
      </form>
    </div>
  );
};

export default AdminHomePage;
