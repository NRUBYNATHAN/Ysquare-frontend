


import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import {API} from "./global";

 function Chart2() {

    

  const [options,setObject]=useState({
   
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: []
      }
    
  })
    const [series,setSeries] = useState([{
      
        name: "income",
        data: []
      } ] )

      useEffect(() => {
        const date=[];
        const amount=[];
      
      axios.get(
            `${API}/data`
          ).then(response =>{
            
            response.data.map(item=>{
              
                
                amount.push(item.amount)
            
                
               
            })
       
            setObject({
   
              chart: {
                id: "basic-bar"
              },
              xaxis: {
                categories: date
              }
            
          })
          setSeries([{
      
            name: "income",
            data: amount
          } ] )
            
          }).catch(e=>{
            alert(e)
          })
     
          
        
      },[]);

  return (
    <div>
    <p>Column chart</p>
          <Chart
              options={options}
              series={series}
              type="bar"
              width={750}
              height={500}
            />


      </div>


  );
}



export default Chart2;