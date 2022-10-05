export default function Form(props){
    const classes = "inline-block text-black bg-white font-['basier_circle']" + ` ${props.classes}`
    const attr = {
        style: {padding: '0.42em 1em'},
        ...props.attr
    }    
    return (
        <input className={classes} {...attr}/>
    )
}

Form.defaultProps = {
    classes: '',
    attr: {},
}