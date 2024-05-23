import React, { useState } from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SpeakerPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const brandHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        speakerData : speakerData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{speakerData.map((phone)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.brand)}
                onChange={()=>brandHandler(phone.brand)}
                />
                {phone.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

           <Link to={`/speakers/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
                <div className="proModel">
                    {item.brand}, {item.model}
                </div>
                </Link>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default SpeakerPage;