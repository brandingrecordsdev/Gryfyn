import { useEffect, useRef } from "react"

export default function Popup(props){
    const popupRef = useRef();
    const popupClasses = 'fixed top-0 left-0 z-50 flex flex-col items-center justify-center invisible w-screen h-screen ' +
    'transition-opacity duration-300 bg-black bg-opacity-80 popup ' + props.classes 

    const contentWrapperClasses = 'flex flex-col items-center justify-center w-full max-h-full transition-opacity duration-300 bg-transparent rounded-md mobile:max-w-md'

    useEffect(() => {
        // When the popup is shown
        if(props.shown){
            popupRef.current.classList.remove('invisible', 'opacity-0')
        }
        // When the popup is hidden
        else{
            popupRef.current.classList.add('opacity-0')
            
            setTimeout(() => {
                popupRef.current.classList.add('invisible')
            }, 300)   
        }
    }, [props.shown])

    return (
        <section ref={popupRef} className={popupClasses}>
            <button type="button" className="absolute text-6xl text-white top-5 right-12" onClick={props.toggleShown}>
                &times;
            </button>
            <div className={contentWrapperClasses}>
                <div className="p-4">{props.body}</div>
            </div>
        </section>
    )
}

Popup.defaultProps = {
    body: 'dddd',
    classes: '',
    shown: false,
    toggleShown: () => {},
    attr: {},
}