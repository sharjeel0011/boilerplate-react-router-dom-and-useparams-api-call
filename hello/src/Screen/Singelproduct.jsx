import {Reac,useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import Card from '../Component/Card';

const Singelproduct = ({id}) => {
    const [data , setData] = useState([])
    const params = useParams()
    console.log(params.id)
    useEffect(()=>{
        axios.get(` https://api.escuelajs.co/api/v1/products/${params.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
            console.log(params.id);
        }).catch((err)=>{
            console.log(err);
        })
      } , [])



      return (
        <div className='flex justify-center mt-[5rem]'>
        {data ? <Card title={data.title} description={data.description} src={data.images} showBtn={false}/> : <span className="loading loading-spinner loading-lg"></span>}
        </div>
      )
}

export default Singelproduct