import React, { useEffect, useState } from 'react'
import './userform.css'

const Userform = () => {
    const[dropdown, setDropdown] = useState([])
  
    useEffect(() => {
        fetch(' http://localhost:3001/travels')
        .then(resp => resp.json())
        .then(data => {
            const destination = data.map((item) => item.destination)
            setDropdown(destination)
        } )
  }, [])
   
   
  
    return (
    <div>
        <form action="">
            <div className="form-field">
                <label>First Name</label>
                <input 
                type='text'
                placeholder='Your Name'
                ></input>
            </div>
            <div className="form-field">
                <label>Last Name</label>
                <input 
                type='text'
                placeholder='Your Name'
                ></input>
            </div>
            <div className="form-field">
                <label>Phone Number</label>
                <input 
                type='number'
                placeholder='Phone'
                ></input>
            </div>
            <div className="form-field">
                <label>Email</label>
                <input 
                type='email'
                placeholder='Email'
                ></input>
            </div>
            
            <div className="form-field">
                <label>Destination</label>
                <select>
                    {
                        dropdown && dropdown.map((destination, index) =>(
                            <option  value={destination} key={index}>{destination}</option>
                        ))
                    }
                </select>
            </div>
            <div className="form-field">
                <label>Checkin Date</label>
                <input 
                type='date'
                placeholder='Book a date'
                ></input>
            </div>
            <div className="form-field">
                <label>Checkout Date</label>
                <input 
                type='date'
                placeholder='Book a date'
                ></input>
            <div className="form-field">
                <label>People</label>
                <select>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='5+'>5+</option>
                </select>
            </div>
            

            </div>
        </form>
    </div>
  )
}

export default Userform