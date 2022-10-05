export default function Button(props){
    const Tag = props.tag
    const classes = "text-black rounded-md bg-[#E8DFD4] font-['basier_circle']" + ` ${props.classes}`
    const attr = {
        style: {padding: '0.42em 1em'},
        ...props.attr
    }

    if(props.tag === 'button'){
        attr.type = 'button'
    }

    return (
        <Tag className={classes} {...attr}>
            {props.children}
        </Tag>
    )
}

Button.defaultProps = {
    tag: 'button',
    children: '',
    classes: '',
    attr: {},
}