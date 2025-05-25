import React from 'react'
import Pro from './pro'

async function getData(i) {
  const data = await fetch('https://6826186c397e48c91314f9d9.mockapi.io/api/store/'+i)
  const x = await data.json()
  return x

}

export default async function Page({ params }) {
  let id = await params
  id = parseInt(id.slug)
  const data = await getData(id)

  return (
    <div className='w-[90%] mx-auto p-4 mt-10'>
      <Pro  data={data}/>
    </div>
  )
}