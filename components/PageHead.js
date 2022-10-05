import Head from "next/head"

export default function PageHead(props){
    return (
        <Head>
            <title>Gryfyn</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>   
            <meta name="description" content={props.description}/>          
        </Head>
    )
}

PageHead.defaultProps = {
    title: 'Title Not Defined',
    description: '',
}