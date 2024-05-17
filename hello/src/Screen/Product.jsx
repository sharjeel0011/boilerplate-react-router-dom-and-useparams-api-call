import {React,useEffect,useState} from 'react'
import axios from 'axios';
import Card from '../Component/Card';


const Product = () => {
  const [data , setData ] = useState([]);
// const params = useParams()
// console.log(params.id);

useEffect(()=>{
  axios.get(' https://api.escuelajs.co/api/v1/products')
  .then((res)=>{
      console.log(res.data);
      setData(res.data);
  }).catch((err)=>{
      console.log(err);
  })
} , [])

  return (
    <>
  
    <div className='flex justify-evenly flex-wrap mt-[5rem] gap-5'>
        {data.length > 0 ? data.map((item)=>{
           
            return <Card
            key={item.id}
            title={item.title}
            description={item.description}
            src={item.images[0]} 
       
            price={item.price}
            id={item.id}
          />
        }):<span className="loading loading-spinner loading-lg"></span>}
    </div>
  </>
  )
}

export default Product