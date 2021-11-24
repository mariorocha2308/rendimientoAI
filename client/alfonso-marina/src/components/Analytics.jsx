import './styles/Analytics.css'
import {FiSearch} from 'react-icons/fi'
import {useSelector, useDispatch} from 'react-redux'
import {searchEmployee} from '../redux/actions/actions.js'
import React, {useState, useEffect} from 'react';
import Employe from './Employe'

const Analytics = () => {
    const employeers = useSelector(state=> state.employees)
    const dispatch = useDispatch()

    const[name, setName]= useState()
    function handleName (e) {setName(e.currentTarget.value)}

    useEffect(()=>{
        if (name) {
            dispatch(searchEmployee(name))
        }
    },[name, dispatch])

    
    return ( 
        <div className='block_analytics'>
            <div className='block_analytics__content'>
                <div className='__content__search'>
                    <div className='__search__content'>
                        <FiSearch className='__content__icons'/>
                        <input type="text" placeholder='Search..' className='__content__input' onChange={handleName} value={name}/>
                    </div>
                </div>
                <div className='__content__cards'>
                    <div>
                        <label className='__content__label'>Analytics</label>
                    </div>
                    <div className='__cards__employee'>
                        {employeers.map(employe=>(
                            <Employe personImg={employe.image} infoName={employe.firstName+' '+employe.lastName} idEmploye={employe.id} data={employe.registration} />
                            
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;