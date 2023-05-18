'use client'

import { useAppSelector, useAppDispatch } from '../lib/hooks'
import { decrement, increment, selectCount } from '../lib/counterSlice'

function Counter() {
    const dispatch = useAppDispatch()
    const count = useAppSelector(selectCount)

    return (
        <div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
            <span>{count}</span>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                +
            </button>
        </div>
    )
}

export default Counter
