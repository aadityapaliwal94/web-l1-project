import { useState } from "react";
import Popup from "./Popup";
import { validateEmail } from "../utils/helper"

export default function BuyProductPopup({item, show, onCloseTap, onFormSubmit}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")


    return (
        <Popup isOpen={show} onClose={onCloseTap} >
            <>
            <h1 className="text-lg md:text-xl text-center mb-4 md:mb-5 text-theme-primary px-2">Buy {item.title ? item.title : ""}</h1>
                <form onSubmit={(e) => {
                e.preventDefault()
                if (name.length <= 0) {
                    setNameError("Please Enter Name")
                }
                if (email.length <= 0) {
                    setEmailError("Please Enter Email")
                } else if (!validateEmail(email)) {
                   setEmailError("Please Enter Correct Email")
                } else {
                    onFormSubmit(name, email, item.title)
                    setName("")
                    setEmail("")
                    setNameError("")
                    setEmailError("")
                }                
                }}>              
                    <div className="flex flex-col gap-1 justify-center items-center w-full">
                        <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                        if (nameError.length > 0){
                            setNameError("")
                        }
                        }} placeholder="Name" className={`input-base w-full max-w-xs md:max-w-sm lg:w-100 ${nameError ? "input-error" : ""}`} /> 
                        {nameError && <span className="text-error self-start ml-2 md:ml-5 text-xs md:text-sm">{nameError}</span>}

                        <input type="text" placeholder="Email" className={`input-base w-full max-w-xs md:max-w-sm lg:w-100 mt-2 ${emailError ? "input-error" : ""}`} 
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (emailError.length > 0){
                            setEmailError("")
                            }
                        }}/> 
                        {emailError && <span className="text-error self-start ml-2 md:ml-5 text-xs md:text-sm">{emailError}</span>}
                        
                        <button className="btn-primary text-base md:text-lg lg:text-xl w-full max-w-xs md:max-w-sm lg:w-30 mt-3 rounded-2xl">
                        Submit
                        </button>
                    </div>                
                </form>
            </>
        </Popup>
    )
}