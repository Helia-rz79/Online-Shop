
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
    <main className='mx-auto w-full max-w-[1280px] px-2.5 sm:px-6 lg:px-8'>
      <Pro  data={data}/>
    </main>
  )
}
