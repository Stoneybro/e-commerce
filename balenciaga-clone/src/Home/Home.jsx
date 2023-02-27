import React, { useState } from 'react'
import Navbar from '../components/Navbar'
const Home = () => {
    const [search,setSearch]=useState(0)
    function scroll(e) {
        console.log(search);
        setSearch(e.currentTarget.search)
        console.log(search);
    }
  return (
    <div onScroll={()=>{console.log(99);}}>
        <Navbar />
        <main className='h-screen' >

        </main>
    </div>
  )
}

export default Home