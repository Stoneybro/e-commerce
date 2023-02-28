import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Categorytiles from './categorytiles'
import Categories from './Categories'
const Home = () => {
    const [search,setSearch]=useState(0)
  return (
    <div>
        <Navbar />
        <main className='' >
            <Categories />
        </main>
    </div>
  )
}

export default Home