import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {
  const [num, setnum] = useState(0)
  const [text, setText] = useState('')
  const [img, setImg] = useState(false)
  const [open, setOpen] = useState('Open')
  const change = () => {
    setImg(!img)
    setOpen(img ? 'open':'clouse')
  }
  
  console.log(num);

  return (
    <>
      <div className="box">
        <button onClick={change}>{open} foto</button>
        {img && <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTt66GH07pTamc1u9Ho2DJBVlnBsVLb1cAn-pztLHN6q2Te2TLTtshSmtIoa43P0lz_GHSSqcv1FLLkkNC2gvMTBb4UwpogThY861OKbIL3UFK90nzJiex8bM48RuhUemXkyl5VgRbscw&usqp=CAc" alt="" />}

      </div>
      <div className="box">
        <h4>{text}</h4>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="box">
        <h4>{num}</h4>
        <button onClick={() => setnum(num + 1)}>dobavit</button>
        <button onClick={() => setnum(num - 1)}>minusovat</button>
        <button onClick={() => setnum(num * 2)}>umnojit</button>
        <button onClick={() => setnum(num / 2)}>podelit</button>
        <button onClick={() => setnum(num * 0)}>0</button>
      </div>

    </>
  )
}

export default App