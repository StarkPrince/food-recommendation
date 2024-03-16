"use client"

import axios from 'axios';
import { useState } from 'react';

function DiabetesPredictionForm()
{
    const [formData, setFormData] = useState({
        gender: '',
        age: '',
        hypertension: 0,
        heartDisease: 0,
        smokingHistory: '',
        bmi: '',
        hba1cLevel: '',
        bloodGlucoseLevel: '',
    });

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/predict', formData);
            console.log(response.data);
            // Handle response
        } catch (error) {
            console.error('Error submitting form', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto my-10">
            <div className="mb-2">
                <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                <select
                    id="gender"
                    name="gender"
                    onChange={handleChange}
                    value={formData.gender}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="mb-2">
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your age"
                    required
                />
            </div>

            <div className="mb-2">
                <label htmlFor="hypertension" className="block mb-2 text-sm font-medium text-gray-900">Hypertension</label>
                <select
                    id="hypertension"
                    name="hypertension"
                    onChange={handleChange}
                    value={formData.hypertension}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="mb-2">
                <label htmlFor="heartDisease" className="block mb-2 text-sm font-medium text-gray-900">Heart Disease</label>
                <select
                    id="heartDisease"
                    name="heartDisease"
                    onChange={handleChange}
                    value={formData.heartDisease}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                >
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="mb-2">
                <label htmlFor="smokingHistory" className="block mb-2 text-sm font-medium text-gray-900">Smoking History</label>
                <select
                    id="smokingHistory"
                    name="smokingHistory"
                    onChange={handleChange}
                    value={formData.smokingHistory}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                >
                    <option value="">Select your smoking status</option>
                    <option value="not current">Not Current</option>
                    <option value="former">Former</option>
                    <option value="no info">No Info</option>
                    <option value="current">Current</option>
                    <option value="never">Never</option>
                    <option value="ever">Ever</option>
                </select>
            </div>

            <div className="mb-2">
                <label htmlFor="bmi" className="block mb-2 text-sm font-medium text-gray-900">BMI</label>
                <input
                    type="number"
                    step="0.01"
                    id="bmi"
                    name="bmi"
                    value={formData.bmi}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your BMI"
                    required
                />
            </div>

            <div className="mb-2">
                <label htmlFor="hba1cLevel" className="block mb-2 text-sm font-medium text-gray-900">HbA1c Level</label>
                <input
                    type="number"
                    step="0.01"
                    id="hba1cLevel"
                    name="hba1cLevel"
                    value={formData.hba1cLevel}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your HbA1c level"
                    required
                />
            </div>

            <div className="mb-2">
                <label htmlFor="bloodGlucoseLevel" className="block mb-2 text-sm font-medium text-gray-900">Blood Glucose Level</label>
                <input
                    type="number"
                    step="0.01"
                    id="bloodGlucoseLevel"
                    name="bloodGlucoseLevel"
                    value={formData.bloodGlucoseLevel}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter your blood glucose level"
                    required
                />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    );
}

export default DiabetesPredictionForm;
