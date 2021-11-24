import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

const EmploteDetail = () => {

    const employeDetail = useSelector(state => state.employees);  
    const { id }= useParams();

    let findEmployee = employeDetail.find(element => element.id === id)

    return ( 
        <div>
            <h1>{findEmployee.firstName + ' ' + findEmployee.lastName}</h1>
        </div>
    );
}

export default EmploteDetail;