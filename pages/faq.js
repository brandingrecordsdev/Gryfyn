import Link from 'next/link'
import LandingPageSection from '../components/LandingPageSection'
import Header from '../components/Header'
import PageHead from '../components/PageHead'

export default function CountryResidenceNeeded(){   
    Link
    return (<>
    <PageHead/>
    <Header/>
    <LandingPageSection classes={'footer-description'}>
    <spam className="privacy-title font-['neue_metana_bold'] text-yellow flex flex-col text-center">
        Why is your country of residence needed?
    </spam>
    <div className="scroll-box font-['basier_circle']">
    <h2 className='faq1'>Why is your country of residence needed?</h2>
    <p className='faq2'><span>Disclosing your country of residence is an important step because we provide a custodial wallet solution &#40;custodial wallets are explained below&#41;. Accurately determining your country of residence allows us to follow relevant Anti-Money Laundering &#40;AML&#41; laws, tax reporting, regulatory compliance.&nbsp;</span></p>
    <p className='faq3'>Further to this, you will not be able to withdraw any assets until your Know Your Customer &#40;KYC&#41; verification has been fully completed and approved. You will only be allowed to deposit.</p>
    <h2 className='faq4'>What is a country of residence?</h2>
    <p className='faq2'>A country of residence is a jurisdiction where you reside, i.e. where you are considered to be a resident. As part of our KYC process, we will ask you to submit proof of residence with your full name and residential address clearly displayed. Examples include: &nbsp;</p>
    <ul>
        <li>utility bill mailed to your <span >residential&nbsp;</span>address in the last three months;</li>
        <li>bank statement mailed to your <span >residential&nbsp;</span>address in the last three months;</li>
        <li>lease agreement;</li>
        <li>employer&rsquo;s certificate for residence proof;</li>
        <li>house purchase deed.</li>
    </ul>
        <h2 className='faq6'>What is the difference between custodial and other wallets?</h2>
        <p className='faq7'>In order to set up a digital asset wallet, a private key &#40;your unique key phrase that looks like a combination of letters and digits&#41; needs to be created and securely stored. Non-custodial &#40;or self-custodial&#41; wallets, such as MetaMask, require you to safekeep the private key by yourself. This means you have full control and responsibility, and will have to take precautions to protect your funds. If you lose the password you set up for your wallet or the key phrase, you will lose access to your assets forever.&nbsp;</p>
        <p className='faq8'></p>
        <p className='faq9'>Custodial wallets like Gryfyn keep your private key and ensure your funds are safe. This allows you to conveniently and securely store your assets without the risk of losing your private keys. We can still help you regain access to your assets even if you lose your wallet&rsquo;s login credentials. &nbsp;&nbsp;</p>
        <h2 className='faq10'>Which countries are not supported by Gryfyn?&nbsp;</h2>
        <p className='faq11'>The countries from the list below are considered high risk, therefore we are not able to provide services there.&nbsp;</p>
    <ul>
        <li>Afghanistan</li>
        <li>Albania</li>
        <li>Barbados</li>
        <li>Burkina Faso</li>
        <li>Cambodia</li>
        <li>Cayman Islands</li>
        <li>Cuba</li>
        <li>Haiti</li>
        <li>Islamic Republic of Iran</li>
        <li>Iraq</li>
        <li>Jamaica</li>
        <li>Jordan</li>
        <li>Libya</li>
        <li>Mali</li>
        <li>Malta</li>
        <li>Morocco</li>
        <li>Myanmar</li>
        <li>Nicaragua</li>
        <li>North Korea</li>
        <li>Pakistan</li>
        <li>Palestine</li>
        <li>Panama</li>
        <li>Philippines</li>
        <li>Puerto Rico</li>
        <li>Senegal</li>
        <li>Somalia</li>
        <li>South Sudan</li>
        <li>Sudan</li>
        <li>Syria</li>
        <li>Turkey</li>
        <li>Uganda</li>
        <li>Ukraine</li>
        <li>Yemen</li>
        <li>Zimbabwe</li>
    </ul>    
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