import './styles/Analytics.css'
import {FiSearch} from 'react-icons/fi'
import {useSelector, useDispatch} from 'react-redux'
import {searchEmployee} from '../redux/actions/actions.js'
import React, {useState, useEffect} from 'react';
import Employe from './Employe'
import AnyChart from 'anychart-react'

const Analytics = () => {
    const employeers = useSelector(state=> state.employees)
    const dispatch = useDispatch()

    const[name, setName]= useState('')
    function handleName (e) {setName(e.target.value)}

    // useEffect(()=>{
    //     if (name) {
    //         dispatch(searchEmployee(name))
    //     }
    // },[name])

    const complexSettings = {
        width: 200,
        height: 160,
        type: 'column',
        data: "P1,5\nP2,3\nP3,6\nP4,4",
        title: 'Column chart',
        yAxis: [2, {
          orientation: 'right',
          enabled: true,
          labels: {
            format: '{%Value}{decimalPoint:\\,}',
            fontColor: 'red'
          }
        }],
        legend: { 
          background: 'lightgreen 0.8',
          padding: 2
        },
        lineMarker: {
          value: 4.5
        }
      };
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
                            <Employe personImg={employe.image} infoName={employe.firstName+' '+employe.lastName} idEmploye={employe.id} data={employe.registration} component={<AnyChart {...complexSettings}  /> }/>
                            
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;