import React from 'react';
import './AddTripModalWindow.scss';
import { citiesNames } from '../../constants/Cities';
import { useForm } from 'react-hook-form';
import uuid from 'react-uuid';

function Modal({ addTrip, closeModal }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 15);

    const startDate = watch('startDate');

    const getEndDateMaxValue = () => {
        if (startDate) {
            const maxEndDate = new Date(startDate);
            maxEndDate.setDate(maxEndDate.getDate() + 15);
            return maxEndDate.toISOString().slice(0, 10);
        }
        return maxDate.toISOString().slice(0, 10);
    };

    const onSubmit = (data) => {
        const newTrip = {
            id: uuid(),
            city: data.city,
            startDate: data.startDate,
            endDate: data.endDate,
        };
        addTrip(newTrip);
        closeModal();
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h2 className='modal-title'>Create Trip</h2>
                    <span className='close' onClick={closeModal}>
                        &times;
                    </span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-container'>
                        <label htmlFor='city'>City</label>
                        <select id='city' {...register('city', { required: true })}>
                            <option value=''>Please select a city</option>
                            {citiesNames.map((cityName) => (
                                <option key={cityName} value={cityName}>
                                    {cityName}
                                </option>
                            ))}
                        </select>
                        {errors.city && (
                            <span className='error'>City is required</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <label htmlFor='startDate'>Start Date</label>
                        <input
                            type='date'
                            id='startDate'
                            placeholder='Select date'
                            {...register('startDate', {
                                required: true,
                                max: maxDate.toISOString().slice(0, 10),
                                min: today.toISOString().slice(0, 10),
                            })}
                        />
                        {errors.startDate && (
                            <span className='error'>
                                Start date must be within the next 15 days from now
                            </span>
                        )}
                    </div>
                    <div className='input-container'>
                        <label htmlFor='endDate'>End Date</label>
                        <input
                            type='date'
                            id='endDate'
                            {...register('endDate', {
                                required: true,
                                max: getEndDateMaxValue(),
                                min: startDate || today.toISOString().slice(0, 10),
                            })}
                        />
                        {errors.endDate && (
                            <span className='error'>
                                End date must be within the next 15 days from the start date
                            </span>
                        )}
                    </div>
                    <div className='button-container'>
                        <button className='cancel-btn' onClick={closeModal} type='button'>
                            Cancel
                        </button>
                        <button className='save-btn' type='submit'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
