import React from 'react'
import classes from './FinisdQwiz.css'

const Finiqwiz = props => {
    return (
        <div className="FinishQwiz">
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you
                    <i className='fa fa-tims'></i>
                </li>
            </ul>

            <p>4 из 10</p>

            <div>
                <button>повторить</button>
            </div>
        </div>
    )
}

export default Finiqwiz