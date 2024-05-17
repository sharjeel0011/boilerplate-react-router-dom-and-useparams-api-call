import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ title
    , price, src, id }) => {

    const navigate = useNavigate()


    function singelProductid(){
        navigate(`/singelProduct/${id}`)
    }

    return (

        <>
            {/* {console.log(images)} */}
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img key={id} src={src} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={singelProductid} className="btn btn-primary">shop Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card