import React ,{useState,useEffect} from 'react'
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

const Data = ()=>{  

    let [data , setData] = useState("")

    const getData = async () =>{
        Axios.get('https://cors-anywhere.herokuapp.com/http://hipsterjesus.com/api')
        .then(response=>{
            setData(response.data.text)
        })
        .catch(err=>{
            console.log(err);
        })
        
    }

    useEffect(()=>{
        getData()
    },[])


   

    return(
        <div className="container">
            <Card className="card">
              <CardContent>
                  {
                      data
                  }
              </CardContent>
            </Card>
        </div>
    )
}

export default Data;