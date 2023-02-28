import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Categories = () => {
    const [categories,setCategories]=useState()
    useEffect(()=>{
        async function cat(params) {
            const response=await axios.get('https://api.escuelajs.co/api/v1/categories')
            setCategories(response.data)
        }
        cat()
    },[])
  return (
    <div>
        {categories?.map((cat)=>{
            return(
                <div key={cat?.id}>
                    <div>{cat?.name}</div>
                    <img src={cat?.image} alt="" />
                    <Link to={`/${cat?.name}`}>{cat?.name}</Link>
                </div>
            )
        })}
    </div>
  )
}

export default Categories