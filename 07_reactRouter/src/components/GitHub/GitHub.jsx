import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex justify-center gap-5 items-center  m-4 bg-[#ffef03] text-white p-4 text-3xl'>
    <img className='' src={data.avatar_url} alt="Git picture" width={300} />
    <div className='text-orange-700' >Github followers: {data.followers}</div>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sahilvishwa2108')
    return response.json()
}