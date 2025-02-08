import React, { useState } from 'react'

function Home() {

    const [text, setText] = useState("")
    const [result, setResult] = useState('')
    const [error, setError] = useState("")

    const chnageHandler = (event) => {
        setText(event.target.value)   
        setError('') 
        setResult('')     
    }
    const clickHandler = () => {  
        let string_txt = text 
        if(text === ""){
            setError('')
            setResult('')
            return setResult(0)
        }else {
            if(text.includes('//')){
                string_txt = string_txt.replaceAll('//', ',')   // remove all "//" from string
            } 
            if(text.includes(',')) {       
                let temp = string_txt.split(",")    //convert into array 
                const negatives = temp.filter((n) => n < 0);    //get negative numbers if any 
                if (negatives.length > 0) {
                    setError(`Negative numbers not allowed: ${negatives.join(",")}`)    //if negative found then show error
                    return false
                }else {
                    setError('') 
                    string_txt = temp.filter(num => num > 0)    //get all numbers greater then 0 
                    let data = string_txt.map(Number)   //convert all string type to Number type 
                    const sum = data.reduce((sum, num) => sum + num, 0);
                    console.log(sum);
                    setResult(sum)
                } 
            }
        } 
    } 

    return (
        <div className='row'>
            <div className='offset-md-3 col-md-6 px-5'>
                <h3 className='my-3'>String Calculator</h3>
                <input 
                    type='text' 
                    className='form-control mb-3'
                    placeholder='Enter String' 
                    onChange={(e) => chnageHandler(e)}
                />
                <button
                    type='button'
                    className='btn btn-primary w-100' 
                    disabled={error.length > 0}
                    onClick={() => clickHandler()}
                >
                    Submit
                </button> 
                {
                    error.length === 0 && result.length !== 0 && ( 
                        <div className="alert alert-success mt-2" role="alert">
                            {`Calculated string: ${result}`}
                        </div>
                    )
                }
                {
                    error.length > 0 && (
                        <div className="alert alert-danger mt-2" role="alert">
                            {error}
                        </div>
                    )
                }
                {
                    text.length === 0 && result.length === 0 && (
                        <div className="alert alert-info mt-2" role="alert">
                            {'Have a nice Day!'}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Home