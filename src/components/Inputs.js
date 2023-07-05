import React, {useState} from 'react'

const Inputs = (props) => {
    const [inputText, setinputText] = useState('');
    const handleChange = (event) => {
        setinputText(event.target.value)
    }
  return (
    <div className='form'>
        <input type='text' onChange={handleChange} value={inputText} required />
        <button onClick={()=>{
            props.addItems(inputText);
            setinputText("");
        }}>
            <span>Add</span>
        </button>
    </div>
  )
}

export default Inputs;