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
            <h1 className="text-xl text-center mb-5">Buy {item.title ? item.title : ""}</h1>
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
                    <div className="flex flex-col gap-1 justify-center items-center">
                        <input type="text" value={name} onChange={(e) => {
                        setName(e.target.value)
                        if (nameError.length > 0){
                            setNameError("")
                        }
                        }} placeholder="Name" className={`border rounded-xl w-100 h-10 pl-5 outline-none ${nameError ? "border-red-400" : "border-gray-700"}`} /> 
                        {nameError && <span className="self-start ml-5 text-sm text-red-500">{nameError}</span>}

                        <input type="text" placeholder="Email" className={`border rounded-xl w-100 h-10 mt-2 pl-5 outline-none ${emailError ? "border-red-400" : "border-gray-700"}`} 
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (emailError.length > 0){
                            setEmailError("")
                            }
                        }}/> 
                        {emailError && <span className="self-start ml-5 text-sm text-red-500">{emailError}</span>}
                        
                        <button className="text-xl bg-gray-300 w-30 px-5 py-2 mt-3 rounded-2xl active:scale-95">
                        Submit
                        </button>
                    </div>                
                </form>
            </>
        </Popup>
    )
}