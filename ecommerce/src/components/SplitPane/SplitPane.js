import React from 'react'

export const SplitPane = ({ left, right }) => {
    return (
        <div className='container'>
            <div className='row h-100'>
                <div className='col-6 py-4'>
                    {left}
                </div>
                <div className='col-6 py-4'>
                    {right}
                </div>
            </div>
        </div>
    )
}
