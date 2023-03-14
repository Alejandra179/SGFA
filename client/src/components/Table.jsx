import React,{useState,useEffect} from 'react'
import {useQuery} from 'react-query';
import { getComedores } from '../apis/comedor';
import ClipLoader from 'react-spinners/ClipLoader'
const Table = () => {
    const {isLoading, data:comedores} = useQuery('comedores',getComedores)
 
   
  return (
    <div>
      {(isLoading)? <ClipLoader size={150}/>: 
      comedores.map((comedor)=><div key={comedor._id}>
        {comedor?.name}
      </div>)
      }
         
      
    </div>
  )
}

export default Table
