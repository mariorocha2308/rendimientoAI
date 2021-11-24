import './styles/Employe.css'
import { Link } from 'react-router-dom'


const Employe = (props) => {
    //console.log(props.component)
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
        <div className='__employee'>
            <div className='__employee__person'>
                <img src={props.personImg} alt="" className='__img__employee'/>
                <div className='__person__info'>
                    <label className='__info__name'>{props.infoName}</label>
                </div>
            </div>
            
            <div className='__employee__stadistics'>
                 {props.component}
            </div>
            <div className='__employee__more'>
                <Link to={`/Employe/${props.idEmploye}`}>
                    <button className='__more__button'>Show analytics</button>
                </Link>
            </div>
        </div>
    );
}

export default Employe;