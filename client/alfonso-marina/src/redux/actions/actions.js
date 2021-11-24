import axios from 'axios' 
export const GET_EMPLOYEES ='GET_EMPLOY'
export const SEARCH_EMPLOYEE = 'SEARCH_EMPLOYE'

export const getEmployes = () => {
    return (dispatch)=>{
        return axios.get('http://localhost:3008/api/users')
        .then(employeer=>{
            console.log(employeer)
            dispatch({
                type:GET_EMPLOYEES,
                payload: employeer.data
            })
        }).catch(error=>console.log(error))
    }
}

export const searchEmployee = (name) => {
    return (dispatch)=>{
        return axios.get(`http://localhost:3008/api/users?name=${name}`)
        .then(employeer=>{
            console.log(employeer)
            dispatch({
                type:SEARCH_EMPLOYEE,
                payload: employeer.data
            })
        }).catch(error=>console.log(error))
    }
}
