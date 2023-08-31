import {useEffect, useState} from 'react';
import {API} from "./global";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Pie } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Pie  Chart',
      },
    },
  };

const Chart6 =() => {
    const [data, setData] = useState({
        labels:['1','2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Dataset 1',
            data:[],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(25, 90, 13, 0.5)',
          },
          {
            label: 'Dataset 2',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      });
    useEffect(()=> {
       const fetchData= async()=> {
           const url = `${API}/data`;
           const labelSet = []
           const dataSet1 = [];
           const dataSet2 = [];
         await fetch(url).then((data)=> {
             console.log("Api data", data)
             const res = data.json();
             return res
         }).then((res) => {
             console.log("ressss", res)
            for (const val of res) {
                dataSet1.push(val.amount);
                dataSet2.push(val.amount)
                // labelSet.push(val.name)
            }
            setData({
                labels:['Amount1','Amount2', 'Amount3', 'Amount4', 'Amount5', 'Amount6', 'Amount7'],
                datasets: [
                  {
                    label: 'Dataset ID',
                    data:dataSet1,
                    borderColor: 'rgb(0,0,0)',
                    backgroundColor: 'rgba(255,0,255,0.3)',
                  },
                  {
                    label: 'Dataset ID2',
                    data:dataSet2,
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 235, 0.5)',
                  },
                ],
              })
            console.log("arrData", dataSet1, dataSet2)
         }).catch(e => {
                console.log("error", e)
            })
        }
        
        fetchData();
    },[])
   
    return(
        <div style={{width:'700px', height:'700px'}}>
            {
                console.log("dataaaaaaaa", data)
            }
            <Pie data={data} options={options}/>
         </div>)
}
export default Chart6;