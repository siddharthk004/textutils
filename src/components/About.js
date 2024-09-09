import React, { useState } from 'react'

export default function About() {
    
    const [myStyle, setmyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    })

    // const [btnText,setBtnText] = useState("Enable Dark Mode")

    // const toggleSetOn = ()=> {
    //     if(myStyle.color === 'black') {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: "0.5px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     }
    //     else {
    //         setmyStyle({color: 'black',
    //         backgroundColor: 'white'
    //     })
    //     setBtnText("Enable Dark mode")
    //     }
    // }

  return (
    <div className="container" style={myStyle}>
        <h3>About Us</h3>
        
        <div className="accordion" id="accordionExample">
            
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id='headingTwo'>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Convert To UpperCase
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    A <strong>"Convert to Uppercase"</strong> button  is a user interface element that, when clicked, takes the text input provided by the user and transforms all the characters into uppercase letters. It enhances readability, ensures consistency in text formatting, or allows users to quickly modify the case of the text without manually retyping it. This button is particularly useful in forms, text editors, or applications where users may want to apply a uniform format to their text input with a single action.
                </div>
                </div>
            </div>


            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id='headingTwo'>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Convert To LowerCase
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                A <strong>"Convert to Lowercase"</strong> button is a user interface feature that, when clicked, changes all the characters in the user's input to lowercase letters. This function helps standardize text formatting, making it useful for applications where case sensitivity matters or where consistent text presentation is required. It allows users to quickly convert text without manually adjusting each character, improving ease of use in text entry and editing processes.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id='headingThree'>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Remove Extra Spaces
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                A <strong>"Remove Extra Spaces"</strong> button is a user interface element that, when clicked, eliminates unnecessary spaces from the entered text, including leading, trailing, and multiple spaces between words. This feature helps clean up text input, ensuring proper formatting and preventing errors caused by extra spacing. It is useful in applications such as forms, text editors, or data processing tools where clean and standardized text is important.
                </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id='headingFour'>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Copy Text
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    A <strong>"Copy Text"</strong> button is a user interface element that, when clicked, copies the selected or entered text to the user's clipboard. This feature allows users to easily duplicate text and paste it elsewhere without manually selecting and copying the text using keyboard shortcuts or mouse actions. It enhances user convenience, especially in applications that involve frequent copying of information, such as forms, documents, or text editors.
                    </div>
                </div>
            </div>

            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id='headingFive'>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    Clear Text
                </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                A <strong>"Clear Text"</strong> button is a user interface element that, when clicked, removes all the text entered or displayed in a text field or input area. This function allows users to quickly reset the content without manually deleting each character, providing a convenient way to start fresh. It's particularly useful in forms, text editors, or applications where users may need to erase and re-enter information frequently.
                    </div>
                </div>
            </div>


            </div>
            {/* <div className="container my-3">
            <button onClick={toggleSetOn} type="button" className="btn btn-danger" >{btnText}</button>
        </div> */}
    </div>
  )
}
