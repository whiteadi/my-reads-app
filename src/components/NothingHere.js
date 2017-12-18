import React from 'react';
import { Link, } from 'react-router-dom';

const NothingHere = () => {
  return (<div className='nothing' >
    <Link className='close-search' to='/' >Close</Link >
  </div >)
}

export default NothingHere;
