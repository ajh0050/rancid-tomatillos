import React from "react";

export default function Error({message}) {
  return (
    <div className='errorMessage'>
      <h1>{message}</h1>
    </div>
  )
}