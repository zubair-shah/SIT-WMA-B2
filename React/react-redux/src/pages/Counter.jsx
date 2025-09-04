import React from 'react'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../redux/slices/counterSlice'


function Counter() {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.zubair)
  const dispatch = useDispatch()
  return (
    <div>
      <div style={{
        display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', marginTop: '20px'
      }}>
        <span>{name}</span>

        <Button
          variant='contained'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        {/* <span>{count}</span> */}
        <Button
          variant='contained'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>{count}</h1>
      </div>
    </div>
  )
}

export default Counter