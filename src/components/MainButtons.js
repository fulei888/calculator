import React from 'react'
import Button from './Button';

export default function MainButtons({data, clickHandler}) {
  return (
    <div>
        {data&&data.map((line, index)=> 
            <div className="spread" key={Date.now()+''+index}>
                {line.map((item,indx) => 
                <Button key={Date.now()+''+indx} click={()=>clickHandler(item)}>{item}</Button>)}
            </div>)}
    </div>
  )
}
