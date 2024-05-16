import {useState} from 'react'
import PropTypes from 'prop-types'
import './CineApp.css'

export const CineApp = ({ title='No hay titulo', valor=0 }) => {
    const [counter, setCounter] = useState(valor)
    
    const handleAdd = () => {
        setCounter(counter + 1)
    }

  return (
    <>
        <div>{title}</div>
        <div>{counter}</div>
        <button onClick={handleAdd}>+1</button>
    </>
  )
}

CineApp.propTypes = {
    title: PropTypes.string.isRequired,
    valor: PropTypes.number.isRequired
}


