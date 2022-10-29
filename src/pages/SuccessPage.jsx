import React from 'react'
import { SuccessAlert } from '../components'

const SuccessPage = (props) => {
    console.log(props)
  return (
    <div>
<p style={{color:"white"}}>Congrats {props.user.firstName}</p>
<SuccessAlert/>




    </div>
  )
}

export default SuccessPage