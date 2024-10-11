import React from 'react'
import { useParams } from 'react-router-dom'

const Recipe = () => {
  let {id} = useParams();
  console.log(id)
  return (
    <div className='col-sm-8'><h1>Preparación de la receta # {id}</h1></div>
  )
}

export default Recipe