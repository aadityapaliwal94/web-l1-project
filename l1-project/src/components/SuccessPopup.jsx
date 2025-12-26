import { useEffect, useState } from "react";
import Popup from "./Popup"

const SuccessPopup = ({message, onComplete, isOpen}) => {

    const [seconds, setSeconds] = useState(10)

    useEffect(() => {
        const timerId = setInterval(() => {
            setSeconds((prev) => prev - 1)            
        }, 1000);
        return () => clearInterval(timerId)
    }, []);


    if (seconds <= 0) {
        onComplete()
    }

    const suffix = seconds > 1 ? "seconds" : "second"

    return (
        <Popup isOpen={isOpen} hideCrossButton={true}>
            <div className="flex flex-col w-70 ">            
                <h2 className="font-bold text-2xl">Success!</h2>
                <p className="mt-2">{message}</p>
                <button className=" text-xl bg-gray-300 mt-10 p-1 rounded-2xl active:scale-95" onClick={onComplete}>
                    OK
                </button>
                <span className="text-xs self-center text-black/60">It will auto close in {seconds} {suffix}</span>
            </div>
        </Popup>
    )
}

export default SuccessPopup