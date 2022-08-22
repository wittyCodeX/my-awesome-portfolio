import React from 'react'
import LoaderContainer from '../../containers/LoaderContainer'
import NameImg from '../../assets/images/loader.svg'

const Loader = () => {
  return (
    <LoaderContainer>
      <img src={NameImg} alt="Jonathan Brown" />
    </LoaderContainer>
  )
}

export default Loader
