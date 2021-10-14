import React from 'react'
import Lottie from 'react-lottie';
import loader from './loader.json'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  type LoaderProps = {
    width?:  number
    height?:  number
  }
  
  export default function Loader ({ width, height }: LoaderProps): React.ReactElement {
    return <Lottie options={defaultOptions} height={height} width={width} />
  }