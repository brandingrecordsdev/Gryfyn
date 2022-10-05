import Header from './Header'
import LoadingScreen from './LoadingScreen'

export default function MainLayout(props){
    return (
    <>      
        <LoadingScreen/>
        <Header/>
        {props.children}              
    </>)
}