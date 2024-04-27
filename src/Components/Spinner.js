import React, { Component } from 'react'
import icons8 from './icons8-spinner.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={icons8} alt="Loading" style={{backgroundColor:'lightblue'}}/>
      </div>
    )
  }
}

export default Spinner
