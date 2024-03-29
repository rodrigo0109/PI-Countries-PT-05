import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCountries } from '../../actions/actions';
import './Nav.css';

const Nav = ({setCountryId}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getAllCountries() )
      }, [dispatch]);

    const handleId = () => {
        setCountryId('')
    };

    return (
        <div className='nav_container'>
            <div className='link_container'>
                <NavLink to='/countries'  className='link' style={({ isActive }) => ({ color: isActive ? '#08FDD8' : '#666' })} >Home</NavLink>
                <NavLink to='/activity' onClick={handleId} className='link' style={({ isActive }) => ({ color: isActive ? '#08FDD8' : '#666' })} >Activity</NavLink>
                <NavLink to='/about'  className='link' style={({ isActive }) => ({ color: isActive ? '#08FDD8' : '#666' })} >About</NavLink>
            </div>
        </div>
    )
}

export default Nav