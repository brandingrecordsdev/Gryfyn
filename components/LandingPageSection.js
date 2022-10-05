// Section container inside the landing page
export default function LandingPageSection(props){
    const classes = `px-32 py-24 mobile:px-4 tablet:px-8 section ${props.classes}`
    // w-screen h-screen px-32 py-24 tablet:w-full shrink-0 tablet:px-11 mobile:px-4 section 

    const Tag = props.tag

    return (
        <Tag className={classes} {...props.attr}>
            {props.children}
        </Tag>
    )
}

LandingPageSection.defaultProps = {
    tag: 'div',
    children: '',
    classes: '',
    attr: {},
}