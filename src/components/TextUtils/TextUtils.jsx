import React,{useState} from 'react'


// var input = "Hello this is #abc# some #abc# stuff.";
// var output = input.replace(regex, "!!");

export default function TextUtils(props) {

    const [textValue, setTextValue] = useState()
    const [searchWord, setSearchWord] = useState()
    const [replaceValue, setReplaceValue] = useState()


    const darkModeStyle = {backgroundColor: props.mode==='dark'? '#21252a': 'white', color: props.mode==='dark'? 'white': '#21252a'}
    const TextAreaStyle = {maxHeight: '30vh', minHeight:'30vh', ...darkModeStyle}

    const handleChange = (e) =>{
        const newValue = e.target.value
        setTextValue(newValue)
    }

    const textSummary = () => {
        const totalWords = textValue.trim().split(/\s+/).length
        const totalCharacter = textValue.replace(/\s+/g, '').trim().length
        const totalTimeToRead = textValue.trim().split(' ').length * 0.008
        return {totalWords, totalCharacter, totalTimeToRead}
    }

    const handleUppercase = () => {
        const convertUpperCase = textValue.toUpperCase()
        setTextValue(convertUpperCase)
        
    }

    const handleLowercase = () => {
        const convertLowerCase = textValue.toLowerCase()
        setTextValue(convertLowerCase)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(textValue)
    }

    const handleExtraSpaces = () => {
        const newText = textValue.replace(/\s+/g, ' ').trim()
        setTextValue(newText)
    }

    const handleClear = () => {
        setTextValue("")
    }

    const handleSearch = () => {
        // console.log("textValue", textValue.trim().split(/\s+/))
        let regex = new RegExp(searchWord.toLowerCase().trim(), "g")
        const result = textValue.toLowerCase().match(regex)
        console.log('search result ', result)

    }

    const handleReplace = () => {
        let regex = new RegExp(searchWord.toLowerCase().trim(), "g")
        const result = textValue.toLowerCase().replace(regex, replaceValue)
        setTextValue(result)

    }
    return (
        <div className='container my-3'  style={darkModeStyle}>
            <div className="container">
                <h3 className='h3 my-3'>Text Utils - Word Counter | Character Counter | Time to Read | Copy Text | Remove Extra Spaces</h3>
                <textarea className="form-control" value={textValue} onChange={handleChange} id="textUtils" style={TextAreaStyle} placeholder='Enter Text here and choose the option below to perform the task on the content'></textarea>
            </div>
            <div className='container-md my-3'>
                <button type="button" disabled={!textValue} className="btn btn-primary" onClick={handleUppercase}>Conver to UpperCase</button>
                <button type="button" disabled={!textValue} className="btn btn-primary m-2" onClick={handleLowercase}>Conver to LowerCase</button>
                <button type="button" disabled={!textValue} className="btn btn-primary" onClick={handleCopy}>Copy to Clipboard</button>
                <button type="button" disabled={!textValue} className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
                <button type="button" disabled={!textValue} className="btn btn-danger" onClick={handleClear}>Clear Text</button>
                <div className="input-group mb-3">
                    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search Word</button>
                    <input type="text" className="form-input" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} placeholder="Search Word here"/>
                    <button className="btn btn-primary" style={{marginLeft: '8px'}} type="button"  onClick={handleReplace}>Replace Word</button>
                    <input type="text" className="form-inputm" value={replaceValue} onChange={(e) => setReplaceValue(e.target.value)} placeholder="Replace Word here"/>
                </div>
            </div>
            <div className='container'>
                <h3>Your Text Summary</h3>
                <p>Total Words Present: {!textValue? 0: textSummary().totalWords}</p>
                <p>Total Characters Present: {!textValue? 0: textSummary().totalCharacter}</p>
                <p>Total Time to Read: {!textValue? 0: textSummary().totalTimeToRead} Minutes</p>
            </div>
            <div className='container'>
                <h3>Preview</h3>
                <p className='p'>{textValue? textValue : 'Nothing to Preview'}</p>
            </div>
        </div>
    )
}
