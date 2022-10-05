import Link from 'next/link'
import LandingPageSection from '../components/LandingPageSection'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import SVG from '../components/SVG'

export default function Privacy(){   
    Link
    return (<>
    <PageHead/>
    <Header/>
    <LandingPageSection classes={'footer-description'}>
        <h1 className="privacy-title font-['neue_metana_bold'] flex flex-col text-center">
            Privacy Policy
        </h1>
        <div className="scroll-box font-['basier_circle']">
            <h5 className="font-['neue_metana_bold']">
                Personal Data processed for the following purposes and using the following services:
            </h5><br/>     
            <dl className='grid grid-cols-2 gap-12 tablet:grid-cols-1'>
                <div className='flex gap-3'>
                    <SVG name={'chart_bar_square'} classes={'w-12 h-12 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">Analytics</dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">Google Analytics</span><br/>
                            <span>Personal Data: Trackers; Usage Data</span>
                        </dd>
                    </div>
                </div>        
                <div className='flex gap-3'>
                    <SVG name={'envelope_open'} classes={'w-11 h-11 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">Contacting the User</dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">Mailing list or newsletter</span><br/>
                            <span>Personal Data: email address</span>
                        </dd>
                    </div>
                </div> 
                <div className='flex gap-3'>
                    <SVG name={'document_text'} classes={'w-11 h-11 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">
                            Interaction with external social networks and platforms
                        </dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">Analytics &#38; Third-Party Service Providers</span>
                        </dd>
                    </div>
                </div>      
                <div className='flex gap-3'>
                    <SVG name={'document_text'} classes={'w-11 h-11 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">Managing contacts and sending messages</dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">MailerLite</span><br/>
                            <span>Personal Data: email address</span>
                        </dd>
                    </div>
                </div>  
                <div className='flex gap-3'>
                    <SVG name={'document_text'} classes={'w-11 h-11 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">Managing support and contact requests</dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">Animoca Brands Limited Privacy Policy</span>
                        </dd>
                    </div>
                </div>  
                <div className='flex gap-3'>
                    <SVG name={'document_text'} classes={'w-11 h-11 shrink-0'}/>
                    <div>
                        <dt className="font-['basier_circle_semibold'] text-white mb-2">Tag Management</dt>
                        <dd>
                            <span className="font-['basier_circle_semibold']">Google Tag Manager</span><br/>
                            <span>Personal Data: Usage Data</span>
                        </dd>
                    </div>
                </div>                                                                                                    
            </dl><br/>
            <h5 className="font-['neue_metana_bold']">
                Contact Information
            </h5><br/>
            <address className='flex gap-4 not-italic'>
                <SVG name={'user'} classes={'w-12 h-12 shrink-0'}/>
                <div>
                    <span className="font-['basier_circle_semibold']">Owner and Data Controller</span><br/>
                    <span>Gryfyn HK Limited - Unit 417-421, Cyberport 1, 100</span><br/>
                    <span>Cyberport Road, Pok Fu Lam, Hong Kong.</span><br/><br/>
                    <span><span className="font-['basier_circle_semibold']">Owner contact email:</span>info@gryfyn.io</span>
                </div>
            </address>
            <a href='https://www.iubenda.com/privacy-policy/51877991/legal' className='flex flex-col text-center p-5 text-2xl'><b className="font-['neue_metana_bold']">Show the complete Privacy Policy</b></a>
        </div>
        <div className="flex flex-col items-center content-center justify-center">
            <spam className="privacy-sub font-['neue_metana_regular'] text-center">i am your&nbsp;<b className="font-['neue_metana_bold']">wallet.</b></spam>
            <spam className="font-['basier_circle']">An NFT-centric wallet for the curious ones. </spam> 
            <spam className="font-['basier_circle']">Experience the digital world like never before.</spam>
        </div>
    </LandingPageSection>
    <span className='fixed bottom-0 right-0 flex justify-end w-full gap-8 p-6 bg-black'>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <Link href="/terms-and-conditions"><a>Terms &#38; Conditions</a></Link>
        <Link href="/faq"><a>FAQ</a></Link>
    </span>     
    </>)
}