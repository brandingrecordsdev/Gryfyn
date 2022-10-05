import Link from 'next/link'
import LandingPageSection from '../components/LandingPageSection'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import Accordion from '../components/Accordion'
import { useState } from 'react'

export default function Cookie(){   
    const [analyticsExpanded, setAnalyticsExpanded] = useState(false)
    return (<>
    <PageHead/>
    <Header/>
    <LandingPageSection classes={'footer-description'}>
    <h1 className="privacy-title font-['neue_metana_bold'] flex flex-col text-center">
        Cookie Policy
    </h1>
    <div className="scroll-box font-['basier_circle']">
        <p>
            This document informs Users about the technologies that help this Application to achieve the purposes described below. 
            Such technologies allow the Owner to access and store information (for example by using a Cookie) or use resources 
            (for example by running a script) on a User&apos;s device as they interact with this Application.
        </p><br/>
        <p>
            For simplicity, all such technologies are defined as &quot;Trackers&quot; within this document &#8211; 
            unless there is a reason to differentiate.
        </p>
        <p>
            For example, while Cookies can be used on both web and mobile browsers, it would be inaccurate to talk about 
            Cookies in the context of mobile apps as they are a browser-based Tracker. For this reason, within this document, 
            the term Cookies is only used where it is specifically meant to indicate that particular type of Tracker.
        </p><br/>
        <p>
            Some of the purposes for which Trackers are used may also require the User&apos;s consent. Whenever consent is given, 
            it can be freely withdrawn at any time following the instructions provided in this document.
        </p><br/>
        <p>
            This Application uses Trackers managed directly by the Owner (so-called &quot;first-party&quot; Trackers) and Trackers 
            that enable services provided by a third-party (so-called &quot;third-party&quot; Trackers). 
            Unless otherwise specified within this document, third-party providers may access the Trackers managed by them.
        </p>
        <p>
            The validity and expiration periods of Cookies and other similar Trackers may vary depending on the lifetime 
            set by the Owner or the relevant provider. Some of them expire upon termination of the User&apos;s browsing session.
        </p>
        <p>
            In addition to what&apos;s specified in the descriptions within each of the categories below, Users may find 
            more precise and updated information regarding lifetime specification as well as any other relevant information &#8211; 
            such as the presence of other Trackers - in the linked privacy policies of the respective third-party providers 
            or by contacting the Owner.        
        </p><br/>
        <h5 className="font-['neue_metana_bold'] text-white">
            Activities strictly necessary for the operation of this Application and delivery of the Service
        </h5><br/>
        <p>
            This Application uses so-called &quot;technical&quot; Cookies and other similar Trackers to carry out activities 
            that are strictly necessary for the operation or delivery of the Service.
        </p><br/>      
        <h5 className="font-['neue_metana_bold'] text-white">
            Other activities involving the use of Trackers
        </h5><br/>      
        <h6 className="block font-['basier_circle_semibold']">Measurement</h6><br/>
        <Accordion expanded={analyticsExpanded} toggleExpand={() => {setAnalyticsExpanded(state => !state)}} 
            tag={'section'}
            heading={'Analytics'}
            body={<>
                <p>
                    The services contained in this section enable the Owner to monitor and analyze web traffic and can be used 
                    to keep track of User behavior.
                </p><br/>
                <h6 className="block font-['basier_circle_semibold']">Google Analytics (Google LLC)</h6><br/>
                <p>
                    Google Analytics is a web analysis service provided by Google LLC (&quot;Google&quot;). Google utilizes 
                    the Data collected to track and examine the use of this Application, to prepare reports on its activities 
                    and share them with other Google services.
                </p><br/>     
                <p>
                    Google may use the Data collected to contextualize and personalize the ads of its own advertising network.
                </p><br/>   
                <p>
                    Personal Data processed: Trackers and Usage Data.
                </p><br/>       
                <p>
                    Place of processing: United States &#8211; Privacy Policy &#8211; Opt Out.
                </p><br/>        
                <p>
                    Storage duration:
                </p><br/>    
                <ul className='list-disc list-inside'>
                    <li>AMP_TOKEN: 1 hour</li>
                    <li>_ga: 2 years</li>
                    <li>_gac*: 3 months</li>
                    <li>_gat: 1 minute</li>
                    <li>_gid: 1 day</li>     
                </ul>                                                            
        </>}/><br/>     
        <p>
            This Application uses Trackers managed directly by the Owner (so-called &quot;first-party&quot; Trackers) and Trackers 
            that enable services provided by a third-party (so-called &quot;third-party&quot; Trackers). Unless otherwise specified 
            within this document, third-party providers may access the Trackers managed by them.
        </p><br/>    
        <h5 className="font-['neue_metana_bold'] text-white">
            How to manage preferences and provide or withdraw consent
        </h5><br/>
        <p>
            There are various ways to manage Tracker related preferences and to provide and withdraw consent, where relevant:
        </p><br/>
        <p>
            Users can manage preferences related to Trackers from directly within their own device settings, 
            for example, by preventing the use or storage of Trackers.
        </p><br/>        
        <p>
            Additionally, whenever the use of Trackers is based on consent, Users can provide or withdraw such consent 
            by setting their preferences within the cookie notice or by updating such preferences accordingly 
            via the relevant consent-preferences widget, if available.
        </p><br/>        
        <p>
            It is also possible, via relevant browser or device features, to delete previously stored Trackers, 
            including those used to remember the User&apos;s initial consent.
        </p><br/>                 
        <p>
            Other Trackers in the browser&apos;s local memory may be cleared by deleting the browsing history.
        </p><br/>         
        <p>
            With regard to any third-party Trackers, Users can manage their preferences and withdraw their consent 
            via the related opt-out link (where provided), by using the means indicated in the third party&apos;s privacy policy, 
            or by contacting the third party.
        </p><br/>       
        <h6 className="block font-['basier_circle_semibold']">Locating Tracker Settings</h6><br/>
        <p>
            Users can, for example, find information about how to manage Cookies in the most commonly used 
            browsers at the following addresses:
        </p><br/> 
        <ul className='list-disc list-inside'>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Internet Explorer</li>
            <li>Microsoft Edge</li>
            <li>Brave</li>
            <li>Opera</li>       
        </ul><br/>
        <p>
            Users may also manage certain categories of Trackers used on mobile apps by opting out through 
            relevant device settings such as the device advertising settings for mobile devices, 
            or tracking settings in general (Users may open the device settings and look for the relevant setting).
        </p><br/>    
        <h6 className="block font-['basier_circle_semibold']">Consequences of denying consent</h6><br/>
        <p>
            Users are free to decide whether or not to grant consent. However, please note that Trackers help this Application 
            to provide a better experience and advanced functionalities to Users 
            (in line with the purposes outlined in this document). Therefore, in the absence of the User&apos;s consent, 
            the Owner may be unable to provide related features.
        </p><br/>
        <h5 className="font-['neue_metana_bold'] text-white">
            Owner and Data Controller
        </h5><br/>        
        <p>
            Gryfyn HK Limited - Unit 417-421, Cyberport 1, 100 Cyberport Road, Pok Fu Lam, Hong Kong.
        </p><br/>
        <p>
            <span className="font-['basier_circle_semibold']">Owner contact email:</span> info@gryfyn.io
        </p><br/>        
        <p>
            Since the use of third-party Trackers through this Application cannot be fully controlled by the Owner, 
            any specific references to third-party Trackers are to be considered indicative. 
            In order to obtain complete information, Users are kindly requested to consult the privacy policies 
            of the respective third-party services listed in this document.
        </p><br/>         
        <p>
            Given the objective complexity surrounding tracking technologies, Users are encouraged to contact the Owner 
            should they wish to receive any further information on the use of such technologies by this Application.
        </p><br/>      
        <Accordion expanded={analyticsExpanded} toggleExpand={() => {setAnalyticsExpanded(state => !state)}} 
            tag={'section'}
            heading={'Definitions and legal references'}
            body={<>
                <h6 className="block font-['basier_circle_semibold']">Personal Data (or Data)</h6><br/>
                <p>
                    Any information that directly, indirectly, or in connection with other information — 
                    including a personal identification number — allows for the identification or identifiability of a natural person.        
                </p><br/>
                <h6 className="block font-['basier_circle_semibold']">Usage Data</h6><br/>
                <p>
                    Information collected automatically through this Application (or third-party services employed in this Application), 
                    which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, 
                    the URI addresses (Uniform Resource Identifier), the time of the request, 
                    the method utilized to submit the request to the server, the size of the file received in response, 
                    the numerical code indicating the status of the server&apos;s answer (successful outcome, error, etc.), 
                    the country of origin, the features of the browser and the operating system utilized by the User, 
                    the various time details per visit (e.g., the time spent on each page within the Application) and the details about 
                    the path followed within the Application with special reference to the sequence of pages visited, and other parameters about 
                    the device operating system and/or the User&apos;s IT environment.
                </p><br/>     
                <h6 className="block font-['basier_circle_semibold']">User</h6><br/>
                <p>
                    The individual using this Application who, unless otherwise specified, coincides with the Data Subject.
                </p><br/>   
                <h6 className="block font-['basier_circle_semibold']">Data Subject</h6><br/>
                <p>
                    The natural person to whom the Personal Data refers.
                </p><br/>        
                <h6 className="block font-['basier_circle_semibold']">Data Processor (or Data Supervisor)</h6><br/>
                <p>
                    The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, 
                    as described in this privacy policy.
                </p><br/>    
                <h6 className="block font-['basier_circle_semibold']">Data Controller (or Owner)</h6><br/>
                <p>
                    The natural or legal person, public authority, agency or other body which, alone or jointly with others, 
                    determines the purposes and means of the processing of Personal Data, including the security measures concerning 
                    the operation and use of this Application. The Data Controller, unless otherwise specified, 
                    is the Owner of this Application.
                </p><br/>  
                <h6 className="block font-['basier_circle_semibold']">This Application</h6><br/>
                <p>
                    The means by which the Personal Data of the User is collected and processed.
                </p><br/>            
                <h6 className="block font-['basier_circle_semibold']">Service</h6><br/>
                <p>
                    The service provided by this Application as described in the relative terms (if available) and on this site/application.
                </p><br/>            
                <h6 className="block font-['basier_circle_semibold']">European Union (or EU)</h6><br/>
                <p>
                    Unless otherwise specified, all references made within this document to the European Union include 
                    all current member states to the European Union and the European Economic Area.
                </p><br/>       
                <h6 className="block font-['basier_circle_semibold']">Cookie</h6><br/>
                <p>
                    Cookies are Trackers consisting of small sets of data stored in the User&apos;s browser.
                </p><br/>   
                <h6 className="block font-['basier_circle_semibold']">Tracker</h6><br/>
                <p>
                    Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, 
                    e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing 
                    information on the User&apos;s device.
                </p><br/>            
                <hr/><br/>
                <h6 className="block font-['basier_circle_semibold']">Legal information</h6><br/>
                <p>
                    This privacy statement has been prepared based on provisions of multiple legislations, 
                    including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation).
                </p><br/>                  
                <p>
                    This privacy policy relates solely to this Application, if not stated otherwise within this document.
                </p>                                                                                                                                          
        </>}/>      
    </div>
    <div className="flex flex-col items-center content-center justify-center">
        <spam className="privacy-sub font-['neue_metana_regular'] text-center">i am your&nbsp;<b className="font-['neue_metana_bold']">wallet.</b></spam>
        <spam className="font-['basier_circle']">An NFT-centric wallet for the curious ones. </spam> 
        <spam className="font-['basier_circle']">Experience the digital world like never before.</spam>
    </div>
    </LandingPageSection>
    <span className='fixed bottom-0 right-0 flex justify-end w-full gap-8 p-6 bg-black'>
        <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
        <Link href="/cookie-policy"><a>Cookie Policy</a></Link>
        <Link href="/terms-and-conditions"><a>Terms &#38; Conditions</a></Link>
        <Link href="/faq"><a>FAQ</a></Link>
    </span>     
    </>)
}