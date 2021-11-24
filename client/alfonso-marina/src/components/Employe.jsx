import './styles/Employe.css'
import { Link } from 'react-router-dom'
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,} from 'chart.js'
import {Line} from 'react-chartjs-2'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const Employe = (props) => {
    //console.log(props.component)
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' ,
        },
        title: {
          display: true,
          text: props.infoName,
        },
      },
    };
    
    const labels = busqueda('createdAt');
    
    const data = {
      labels,
      datasets: [
        {
          label: 'sale_day',
          data: busqueda('sale_day'),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'losses_day',
          data: busqueda('losses_day'),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    function busqueda(params){
      const data = props.data
      return data.map(dato=>{
        const datos=`${dato[params]}`
        if(Math.abs(datos)){
          //console.log('dentros')
          return Math.abs(datos)
        }
        //console.log()
        return  datos.substr(0,10)
      })
    }
    
    return ( 
        <div className='__employee'>
            <div className='__employee__person'>
                <img src={props.personImg} alt="" className='__img__employee'/>
                <div className='__person__info'>
                    <label className='__info__name'>{props.infoName}</label>
                </div>
            </div>
            
            <div className='__employee__stadistics'>
              {props.data==0?<h2>has no registration</h2>:<Line options={options} data={data}  width={300} height={155}/>}
              
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