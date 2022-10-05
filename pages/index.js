import Link from 'next/link'
import Script from 'next/script'
import MainLayout from '../components/MainLayout'
import LandingPageSection from '../components/LandingPageSection'
import SVG from '../components/SVG'
import Button from '../components/Button'
import Form from '../components/Form'
import Popup from '../components/Popup'
import PageHead from '../components/PageHead'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'

export default function Home(){
    const [popupShown, setPopupShown] = useState(false)
    const [usrEmailAddr, setUsrEmailAddr] = useState('')
    const [usrEmailValid, setUsrEmailValid] = useState(true)
    const [successSubscribe, setSuccessSubscribe] = useState(false)
  
    const subscribe = useCallback(() => {
        const options = {
            method: 'POST',
            body: JSON.stringify({email: usrEmailAddr}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "X-MailerLite-ApiKey": '8c569c7547905031e5272208f8e35262',
            },            
        };
        fetch('https://cors.gryfyn.io/https://api.mailerlite.com/api/v2/subscribers', options)
        .then(response => {
            if(response.status === 400){
                setUsrEmailAddr('')
                setUsrEmailValid(false)
                throw new Error('Please enter valid email address');
            }
            return response.json()
        })
        .then(response => {
            setUsrEmailAddr('')
            setUsrEmailValid(true)
            setSuccessSubscribe(true)
        })
        .catch(err => {
            console.error(err)
        });        
    }, [usrEmailAddr])    

    useEffect(() => {
        return () => {
            document.body.style.height = 'auto'
            document.body.style.touchAction = 'auto'
            document.documentElement.style.height = 'auto'
            document.documentElement.style.touchAction = 'auto'            
        }
    }, [])

    return (<>
        <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <PageHead/>
        <MainLayout>
            <div id="wrapper" className="wrapper">
                <LandingPageSection classes={'relative flex flex-col'} tag={'header'} attr={{id: 'world-beyond'}}>
                    <h1 className="relative text-5xl font-['neue_metana_regular'] w-full leading-tight tablet:flex tablet:flex-wrap tablet:justify-center" style={{zIndex: '1'}}>
                        <span style={{marginRight: '0.5em'}}>A</span>
                        <span className='relative' style={{marginRight: '0.5em'}}>
                            world
                            <span id="black-sun" className='absolute w-8 h-8 bg-black'></span>
                            <SVG name={'sun_empty'} classes={'absolute anim-world-beyond-o'} attr={{
                                style: {width: '1.4em', left: '0.8em', top: '-0.2em'}
                            }}/>
                        </span><br className='tablet:hidden'/>
                        <span style={{marginRight: '0.5em'}}>beyond</span>
                        <span className='relative' style={{marginRight: '0.5em'}}>
                            your
                            <SVG name={'star'} classes={'absolute anim-world-beyond-u'} attr={{
                                style: {top: '-0.3em', left: '1.5em', width: '0.65em'}
                            }}/>
                        </span><br className='tablet:hidden'/>
                        <span className='relative' style={{marginRight: '0.5em'}}>
                            imagination
                            <span className='absolute w-2 h-2 bg-black' id="black-star"></span>
                            <SVG name={'star'} classes={'absolute anim-world-beyond-o'} fill_1={'#F7CE55'} attr={{
                                style: {top: '-0.3em', left: '-0.22em', width: '0.67em'}
                            }}/>
                        </span>
                        <span className='relative'>
                            awaits
                            <span className='absolute bg-black eye-black'></span>
                            <SVG name={'eye'} classes={'absolute eye-in-a'}/>                            
                        </span>
                    </h1>    
                    <p className="relative flex items-center w-full mt-10 tablet:justify-center" style={{zIndex: '1'}}>
                        <span className="relative before:absolute before:rounded-full before:top-2 before:left-2.5 inline-block h-12 mr-6 border-2 rounded-full w-7 anim-scroll-to-explore before:content-[''] before:w-1 before:h-2"></span>
                        Scroll to explore                       
                    </p>
                    <SVG name={'star'} classes={'absolute'} attr={{
                        id: "star-divider",
                        'data-0': 'transform: rotate(0deg);',
                        'data-100': 'transform: rotate(90deg);',
                    }}/>                    
                </LandingPageSection>      
                
                <LandingPageSection classes={'flex flex-col items-center justify-center bg-red'} tag={'p'} attr={{
                    id: 'im-your-imagination', 'data-hold-leave': 300 , 'data-hold-enter': 1200,
                }}>
                    <span className="relative flex flex-col mobile:items-center font-['neue_metana_regular'] content">
                        <span className="text-4xl text-white im-your-imagination-fading-text">
                            I am your
                        </span>
                        <span className="relative text-5xl ml-14 mobile:ml-0 im-your-imagination-fading-text text-yellow">
                            imagination
                            <span className='absolute bg-black' style={{left: '1.46em', top: '0.42em', width: '0.6em', height: '0.4em'}}></span>
                            <span className='absolute bg-black' style={{left: '4.23em', top: '0.42em', width: '0.6em', height: '0.4em'}}></span>
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.12em', left: '1.35em', width: '0.85em'}
                            }}/>     
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#FFCD32'} fill_2={'#0268A3'} attr={{
                                style: {top: '0.12em', left: '4.13em', width: '0.85em'}
                            }}/>                                                       
                        </span>
                        <span className='relative star-container'>
                            <SVG name={'star'} classes={'absolute anim-im-your-imagination-pattern2'}/> 
                            <SVG name={'star'} classes={'absolute anim-im-your-imagination-pattern1'}/>  
                        </span>                                                                                                        
                    </span>
                </LandingPageSection>

                <LandingPageSection classes={'relative flex flex-col items-center justify-center'} tag={'p'} attr={{
                    id: 'create-future', 'data-hold-enter': '700'
                }}>
                    <span className="flex flex-col items-center justify-center anim-create-future">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-yellow">create</span>
                        <span className="text-xl text-center">
                            the world of the future,<br/>
                            and witness the boundless<br/>
                            possibilities of your mind.
                        </span>               
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"relative flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{
                    id: 'im-playground', 'data-hold-enter': 2000
                }}>
                    <span className='absolute flex flex-col items-center justify-center gap-8 tracking-widest text-7xl text-blue playground-words' aria-hidden="true">
                        <span className='playground'>playground</span>
                        <span className='playground'>playground</span>
                        <span className='playground'>playground</span>
                        <span className='relative playground'>
                            playground
                            <span className='absolute bg-black' style={{left: '1.4em', top: '0.36em', width: '0.55em', height: '0.45em'}}></span>
                            <SVG name={'eye'} fill_1={'#2388C1'} fill_2={'#FE6B32'} classes={'absolute'} attr={{
                                style: {top: '0.185em', left: '1.34em', width: '0.78em'}
                            }}/>
                            <SVG name={'star'} fill_1={'#439948'} classes={'absolute'} attr={{
                                style: {top: '-0.1em', left: '5.64em', width: '0.62em'}
                            }}/>
                        </span>
                        <span className='playground'>playground</span>
                        <span id="load-bar" className='relative w-full h-2 bg-white' style={{top: '-8rem'}}></span>
                        <SVG name={'sun'} fill_1={'#F36B37'} fill_2={'#FFCD32'} classes={'absolute tablet:w-5'} attr={{id: 'sun'}}/>
                    </span>
                    <span className='flex flex-col items-center justify-center mobile:w-full' style={{width: '38rem'}}>
                        <span id="im-your" className='text-5xl mb-15'>
                            I am your
                        </span>
                        <span className='sr-only'>playground</span>
                    </span>                
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'} attr={{
                    id: "play-roles", 'data-hold-leave': 500, 'data-hold-enter': 700,
                }}>
                    <span className="flex flex-col items-center justify-center body">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-orange title">
                            play
                        </span>
                        <span className="text-2xl text-center desc">
                            any roles of your desire,<br className=""/>
                            fulfill your fantasies.<br className=""/>
                            Bring utility to its full potential.
                        </span>
                    </span>
                </LandingPageSection>        

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center font-['neue_metana_regular']"} attr={{
                    id: 'im-your-home', 'data-hold-leave': 900, 'data-hold-enter': 2500, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col items-center justify-center border-8 border-body w-96 h-96 anim-im-your-home-box">
                        <span className="absolute bottom-0 left-0 w-full h-full anim-im-your-home-inner-box bg-body" ></span>
                        <span className="absolute text-3xl text-body im-your-text">
                            I am your
                        </span>
                        <span className="absolute text-6xl text-green home-text">
                            home
                            <SVG name={'sun'} fill_1={'#F36B37'} fill_2={'#439948'} classes={'absolute'} attr={{
                                style: {top: '-0.25em', left: '0.50em', width: '1.5em'}
                            }}/>
                        </span>
                        <span className='anim-im-your-home-squares' style={{width: '23rem', height: '23rem', transform: 'scale(2)'}}
                       >
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8 left-20'>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                            </span>        
                            <span className='absolute grid grid-cols-2 gap-4 top-4 left-20'>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                            </span>                                          
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{right: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-green'></span>
                                <span className='w-24 h-24 bg-yellow'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                                <span className='w-24 h-24 bg-green'></span>
                            </span>
                            <span className='absolute grid grid-cols-2 gap-4 bottom-8' style={{left: '-8.92rem'}}>
                                <span className='w-24 h-24 bg-yellow'></span>
                                <span className='w-24 h-24 bg-orange'></span>
                                <span className='w-24 h-24 bg-green'></span>
                                <span className='w-24 h-24 bg-blue'></span>
                                <span className='w-24 h-24 bg-body'></span>
                                <span className='w-24 h-24 bg-yellow'></span>
                            </span>  
                        </span>                                           
                    </span>
                </LandingPageSection>

                <LandingPageSection tag={'p'} classes={"flex flex-col items-center justify-center"} attr={{
                    id: 'socialize', 'data-hold-leave': '400', 'data-hold-enter': '600', 'data-slide-dur': '50ms',
                }}>
                    <span className="flex flex-col items-center justify-center title">
                        <span className="mb-6 text-6xl font-['neue_metana_bold'] text-green">
                            socialise
                        </span>
                        <span className="p-4 text-2xl text-center desc">
                            and connect with a world of opportunity.<br/><br/>
                            Communicate with those who inspire us <br className="mobile:hidden"/>
                            to explore the boundaries of imagination <br className="mobile:hidden"/>
                            from a new perspective.
                        </span>
                    </span>
                </LandingPageSection>         

                <LandingPageSection tag={'p'} classes={'relative flex flex-col items-center justify-center'} attr={{
                    id: 'im-adventure', 'data-hold-leave': 600, 'data-hold-enter': 2000, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col items-center justify-center font-['neue_metana_regular'] anim-eye-zoom-out tablet:w-full">
                        <SVG name={'eye'} classes={'w-full'} fill_1={'#E8DFD4'} fill_2={'#1996CE'}/>                         
                        <span className="absolute text-4xl text-white im-your">
                            I am your
                        </span>             
                        <span className="absolute text-black opacity-0 text-7xl adventure">
                            <span>adventure</span>
                            <SVG name={'eye'} classes={'absolute'} fill_1={'#000000'} fill_2={'#FFCD32'} attr={{
                                style: {top: '0.16em', left: '-0.08em', width: '0.84em'}
                            }}/> 
                            <SVG name={'star'} classes={'absolute'} fill_1={'#FFCD32'} attr={{
                                style: {top: '-0.1em', left: '4.69em', width: '0.6em'}
                            }}/>  
                        </span>         
                        <SVG name={'eye'} classes={'absolute top-0 left-0 w-full anim-eye-lid-blinking'} fill_1={'#000000'} fill_2={'#000000'}/>                        
                    </span>                  
                </LandingPageSection>   

                <LandingPageSection tag={'p'} classes={'flex flex-col items-center justify-center'} attr={{
                    id: 'explore', 'data-hold-leave': 200, 'data-hold-enter': 700, 'data-slide-dur': '50ms',
                }}>
                    <span className="mb-6 text-6xl explore font-['neue_metana_bold'] text-blue">
                        explore
                    </span>
                    <span className="text-2xl text-center explore-desc">
                        the (un)known.<br/>
                        Go on the journey that is unique to you,<br/>
                        and watch Web 3 grow as you grow with it.
                    </span>
                </LandingPageSection>    

                <LandingPageSection classes={'flex flex-col items-center justify-center'} attr={{
                    id: 'im-your-wallet', 'data-hold-leave': 600, 'data-hold-enter': 800, 'data-slide-dur': '50ms',
                }}>
                    <h2 className="flex mobile:flex-col mobile:text-center items-center flex-wrap gap-5 mb-6 text-6xl anim-im-your-wallet-title font-['neue_metana_regular']">
                        I am your 
                        <span className="font-['neue_metana_bold']"> wallet.</span>
                    </h2>
                    <span className="text-2xl text-center anim-im-your-wallet-desc">
                        An NFT-centric wallet for the curious ones. <br className="mobile:hidden"/>
                        Experience the digital world like never before.
                    </span>
                </LandingPageSection> 
                
                <LandingPageSection tag={'div'} classes={'relative flex flex-col items-start justify-start'} attr={{
                    id: 'your-key', 'data-hold-leave': 600, 'data-hold-enter': 800, 'data-slide-dur': '50ms',
                }}>
                    <span className="relative flex flex-col font-['neue_metana_regular'] text-5xl w-full mobile:items-center mobile:text-4xl">
                        <span className="mb-4 your-key">Your key</span>
                        <span className="flex items-center to-the">
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F36B37'}/>                            
                            <span className="mx-3 mobile:mx-2">to the</span>
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F7CE54'}/> 
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#0a9c49'}/> 
                            <SVG name={'star'} classes={'w-20 mobile:w-14'} fill_1={'#F7CE54'}/>                                                            
                        </span>
                        <span className="flex items-center font-['neue_metana_bold'] mb-4 unknown">
                            <SVG name={'eye'} classes={'w-28 mobile:w-20'} fill_1={'#1996CE'} fill_2={'#F7CE54'}/>                             
                            <span className="before:content-['('] before:text-yellow after:content-[')'] after:text-yellow mx-5 mobile:mx-3 uppercase">
                                un
                            </span>
                            known
                        </span>
                        <Button classes={'text-2xl w-60 unlock-btn'} attr={{ onClick: () => {setPopupShown(true)} }}>
                            Unlock Now
                        </Button>
                    </span>
                    <span className='absolute bottom-0 right-0 flex flex-col justify-end w-full gap-2 p-2 bg-black tablet:bg-body footer'>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1362.79 495.91" className="flex-shrink-1 footer-logo">
                            <path fill="#FFCD32" d="M598.57,113.99c-17.51-3.66-28.81-14.98-35.57-35.6l-.37-1.14-.37,1.14c-6.75,20.62-18.06,31.93-35.57,35.6l-1.84,.38,1.84,.38c17.51,3.67,28.81,14.98,35.57,35.6l.37,1.14,.37-1.14c6.75-20.62,18.05-31.93,35.57-35.6l1.84-.38-1.84-.38Z"/>
                            <path fill="#449947" d="M974.75,113.99c-17.51-3.66-28.81-14.98-35.57-35.6l-.37-1.14-.37,1.14c-6.75,20.62-18.06,31.93-35.57,35.6l-1.84,.38,1.84,.38c17.51,3.67,28.81,14.98,35.57,35.6l.37,1.14,.37-1.14c6.75-20.62,18.05-31.93,35.57-35.6l1.84-.38-1.84-.38Z"/>
                            <path fill="#00000" d="M1024.86,85.7c-31.7,0-57.4,25.7-57.4,57.4v57.3h0c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66h0v-57.3c0-31.7-25.7-57.4-57.4-57.4h0v114.77h0c.04,47.49,38.55,86.04,86.06,86.04h0c15.8,0,28.62,12.81,28.62,28.62s-12.81,28.62-28.62,28.62-28.54-12.75-28.61-28.49h-57.35c.07,47.42,38.53,85.84,85.96,85.84s85.97-38.49,85.97-85.97c0-22.02-8.29-42.09-21.9-57.3,13.65-15.22,21.97-35.32,21.98-57.36h0V85.7h0Z"/>
                            <path fill="#00000" d="M648.69,85.7c-31.7,0-57.4,25.7-57.4,57.4v57.3c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66h0v-57.3c0-31.7-25.7-57.4-57.4-57.4v114.75h0c.03,47.5,38.55,86.06,86.06,86.06h0c15.81,0,28.62,12.81,28.62,28.62s-12.81,28.62-28.62,28.62-28.54-12.75-28.61-28.49h-57.35c.07,47.42,38.53,85.84,85.96,85.84s85.97-38.49,85.97-85.97c0-22.02-8.29-42.09-21.9-57.3,13.65-15.22,21.97-35.33,21.98-57.38h0V85.7h0Z"/>
                            <path fill="#00000" d="M663.14,134.46c-.74,28.3,21.98,51.47,50.11,51.47-25.69,0-46.86,19.34-49.77,44.25-.19,1.6-.23,3.21-.24,4.82-.03,6.29-.12,51.4-.12,51.4h57.39v-40.25c-.01-11.46,9.28-20.75,20.74-20.75l65.31,.04v-53.79h-71.15c-7.7,0-14.46-5.81-14.92-13.5-.5-8.35,6.12-15.28,14.36-15.28h100.14v-57.2h-120.63c-27.35,0-50.51,21.45-51.23,48.79Z"/>
                            <path fill="#00000" d="M1214.51,171.76c0-47.53-38.53-86.06-86.06-86.06s-86.06,38.53-86.06,86.06h0v114.7h57.4v-88.78c-19.21-9.11-32.28-23.9-32.28-23.9,0,0,27.29-30.89,60.95-30.89s60.95,30.89,60.95,30.89c0,0-13.08,14.8-32.3,23.91l.02,88.77h57.4l-.02-114.7Z"/>
                            <path fill="#00000" d="M461.06,227.78c-3.95-23.74-24.57-41.84-49.43-41.84,27.69,0,50.13-22.44,50.13-50.13s-22.44-50.13-50.13-50.13l-207.9,.02c-47.48,0-85.97,38.49-85.97,85.97,0,.04-.03,28.08-.03,28.08,0,33.73,19.41,63.27,47.67,77.58,.48,.25,.74,.42,1.24,.63,9.3,4.86,15.62,4.28,23.53,3.31,6.39-4.76,11.16-12,14.53-21.93,3.14,9.98,7.73,17.32,13.99,22.22,7.88,1.11,16.35-.68,25.73-5.34-4.81,9.33-6.71,17.8-5.7,25.71,4.79,6.37,12.06,11.11,22.01,14.43-10.04,3.22-17.39,7.89-22.26,14.25-1.2,7.92,.55,16.46,5.21,25.92-9.33-4.86-17.81-6.8-25.74-5.8-6.43,4.75-11.23,12-14.63,21.94-3.14-10.02-7.73-17.39-14.03-22.31-7.9-1.2-16.42,.53-25.86,5.15,4.88-9.3,6.84-17.76,5.87-25.69-4.73-6.4-11.94-11.19-21.84-14.6h-29.81c.07,47.42,38.59,85.84,86.11,85.84s86.12-38.49,86.12-85.97c0-22.19-8.42-42.41-22.25-57.66,13.8-15.26,22.21-35.5,22.21-57.69h0v-28.09h-57.4v28.09h0c0,15.8-12.86,28.66-28.66,28.66s-28.66-12.86-28.66-28.66v-28.08c-.01-15.79,12.78-28.6,28.57-28.62l186.33-.17c8.26,0,14.9,6.96,14.36,15.34-.49,7.65-7.19,13.43-14.85,13.43h-71.22v53.79l65.31-.04c11.46,0,20.75,9.29,20.75,20.75v40.23h57.38l-.12-50.66c0-2.66-.14-5.33-.57-7.96Z"/>
                            <circle fill="#EA7542" cx="203.98" cy="315" r="22.1" transform="translate(-162.99 236.5) rotate(-45)"/>
                            <circle fill="#2488C1" cx="1128.46" cy="171.69" r="22.1"/>
                        </svg> 
                        <div className='flex flex-row items-center justify-end text-w tablet:justify-center mobile:text-xs text-body tablet:text-black tablet:py-0 laptop:py-6 desktop:py-6 laptop:gap-5 desktop:gap-5'>
                            <Link href="/privacy-policy"><a className='text-center footer-texts desktop:text-white hover-underline-animation'>Privacy Policy</a></Link>
                            <Link href="/cookie-policy"><a className='text-center footer-text desktop:text-white hover-underline-animation'>Cookie Policy</a></Link>
                            <Link href="/terms-and-conditions"><a className='text-center footer-text desktop:text-white hover-underline-animation'>Terms &#38; Conditions</a></Link>
                            <Link href="/faq"><a className='text-center footer-text desktop:text-white hover-underline-animation'>FAQ</a></Link>
                        </div>  
                        <div className='flex flex-row items-center justify-center social-icons'>
                            <a href="https://www.linkedin.com/company/gryfyn/" className='flex flex-col p-2'>
                                <SVG name={'linkedin'} fill_1={'#00000'} classes={'w-9 h-9'}/>
                            </a> 
                            <a href="https://www.instagram.com/gryfyn.app/" className='flex flex-col p-2'>
                                <SVG name={'instagram'} fill_1={'#00000'} classes={'w-9 h-9'}/>
                            </a>
                            <a href="https://twitter.com/gryfynwallet" className='flex flex-col p-2'>
                                <SVG name={'twitter'} fill_1={'#00000'} classes={'w-9 h-9'}/>
                            </a>
                        </div>    
                    </span>     
                </LandingPageSection>      
            </div>
            <aside>
                <Button classes={'text-lg fixed top-4 right-6'} attr={{ id: 'discover-more' }}>
                    Discover More
                </Button>   
            </aside>   

            <Popup
                shown={popupShown}
                toggleShown={() => {setPopupShown(state => !state)}}
                body={
                    <div className={"font-['basier_circle'] text-4xl flex flex-col justify-center items-center"}>
                        {successSubscribe ?
                            'Thank you for subscribing' :
                            <>
                                Be the first to know
                                <Form classes={`text-lg w-96 mt-4 mb-10${usrEmailValid ? '' : ' placeholder-red-600'}`} attr={{
                                    value: usrEmailAddr,
                                    onChange: (e) => {setUsrEmailAddr(e.target.value)},
                                    placeholder: usrEmailValid ? 'Please enter your email address' : 'Please enter valid email address'
                                }}/>
                                <Button classes={'text-lg'} attr={{ onClick: subscribe }}>
                                    Subscribe
                                </Button>                            
                            </> 
                        }
                    </div>
                }
            />            
        </MainLayout>
        <Script
            id="script-js" src="js/script.js"
            strategy="afterInteractive"
            onError={(e) => {
                console.error('Script failed to load', e)
            }}            
        /> 
        <Script id="script-js">{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '7933809916689684'); 
            fbq('track', 'PageView');
        `}</Script>
    </>)
}