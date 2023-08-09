import React from 'react'

import Code from '../components/code/Code'
import Header from '../components/header/Header';
import Result from './result/Result';


function Home() {
  return (
    <>
        <Header />
        <Code />
        <Result />
    </>
  )
}

export default Home