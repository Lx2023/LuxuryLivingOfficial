import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
const Loading = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20rem',
        fontFamily: 'Shoreline',
        position: 'fixed',
        top: '0',
        background: 'black',
      }}
    ><LoadingOutlined /></div>
  )
}

export default Loading