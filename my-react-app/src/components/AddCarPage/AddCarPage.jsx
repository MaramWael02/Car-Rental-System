import React, { useState } from "react";
import Header_Admin from "../Header_Admin/Header_Admin";

export const ADDCAR = (props) => {
    const [plate_id, setPlateid] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [office_id, setOfficeid] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // prevents the page from refreshing
        
        try {
            const response = await fetch('http://localhost:8000/api/add-car', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ plate_id, model, brand, year, office_id, price}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Successful Registeration', data);
                // Handle successful login (e.g., redirect to dashboard)
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Hello Server error');
        }
    }

    return (
        <div className="auth-form-container">
          <Header_Admin />
          <img  alt="background of a car" src="../images/bg_1.jpg" className="background_image"/>
          <form className="addcar-form" onSubmit={handleSubmit}>
          <h2 className="AddCarlabel">Add Car</h2>
            <label htmlFor="plate_id">Plate ID</label>
            <input 
                value={plate_id} 
                onChange={(e) => setPlateid(e.target.value)} 
                name="plate_id" id="plate_id" 
                placeholder="Enter Plate ID" 
            />
            <label htmlFor="model">Model</label>
            <input 
                value={model} 
                onChange={(e) => setModel(e.target.value)} 
                name="model" id="model" 
                placeholder="Enter Car's Model" 
            />
            <label htmlFor="brand">Brand</label>
            <input 
                value={brand} 
                onChange={(e) => setBrand(e.target.value)} 
                name="brand" id="brand" 
                placeholder="Enter Car's Brand" 
            />
            <label htmlFor="year">Year</label>
            <input 
                value={year}
                type="number"
                onChange={(e) => setYear(e.target.value)} 
                placeholder="Enter Car's Year" 
                id="year" name="year" 
            />
            <label htmlFor="office_id">Office ID</label>
                <input 
                value={office_id} 
                onChange={(e) => setOfficeid(e.target.value)} 
                type="number"
                placeholder="Enter Car's Office ID"
                id="office_id" name="office_id" 
            />
             <label htmlFor="price">Price</label>
             <input 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                type="number"
                placeholder="600"
                id="price" name="price" 
            />
            <button type="submit" onClick={handleSubmit}>Add Car</button>
            {error && <p className="error-message">{error}</p>}
         </form>
        </div>
    )
}