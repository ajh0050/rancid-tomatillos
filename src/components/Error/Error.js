import React from "react";

export default function Error({message}) {
  return (
    <div className='errorMessage'>
      <h1>there was an error</h1>
      <h1>{message.toString()}</h1>
    </div>
  )
}