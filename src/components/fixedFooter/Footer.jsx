import React from 'react'
import "../fixedFooter/footer.scss"

import logo from '../fixedFooter/logos/logo1.jpeg'
import france from '../fixedFooter//logos/France.jpg'
import spain from '../fixedFooter//logos/spain.jpg' 


import{BiLogoDiscord} from 'react-icons/bi';
import{BiLogoFacebookSquare} from 'react-icons/bi';
import{BiLogoInstagram} from 'react-icons/bi';
import{BiLogoTwitter} from 'react-icons/bi';
import{BiLogoLinkedinSquare} from 'react-icons/bi';
import{BiLogoApple} from 'react-icons/bi';
import{BiLogoPlayStore} from 'react-icons/bi';
import{BiSolidChevronRightCircle} from 'react-icons/bi';


const Footer = () => {
  return (
    
        <div className='fixedfooter'>
            <div>
                <div>
                    <img className='mbLogo' src={logo} />
                </div>
                <div>
                    <p>Copyright © 2021 MadBox.</p>
                    <p>all rights reserved</p>
                </div>
            </div>
            <div className="location1">
                <div className="france">
                    <div className='flagFrance'>
                        <img id='Fpic' src={france}/>
                    </div>
                    <div>
                        <h4>Madbox Paris</h4>
                        <p>19 Rue Poissonnière</p>
                        <p>75002 Paris France</p>
                    </div>
                </div>
            </div>
            <div className="location2">
                <div className="spain">
                    <div className='flagSpain'>
                        <img id='Spic' src={spain}/>
                    </div>
                    <div>
                        <h4>Madbox Barcelona</h4>
                        <p>Utopicus Gal·la Placídia</p>
                        <p>08006 Barcelona</p>
                    </div>
                </div>
            </div>

            <div className="email">

                <div className='staytuned'>
                    <h4>Stay tuned!</h4>
                </div>

                <div class="input-container">
                    <i class="logo"><BiSolidChevronRightCircle/></i>
                    <input id='emailBox' type='email' placeholder='Enter your email' />
                </div>

            
                <div className="icons">      
                    <BiLogoDiscord className="icon"/>
                    <BiLogoFacebookSquare className="icon"/>
                    <BiLogoInstagram className="icon"/>
                    <BiLogoTwitter className="icon"/>
                    <BiLogoLinkedinSquare className="icon"/>
                    <BiLogoApple className="icon"/>
                    <BiLogoPlayStore className="icon"/>
                </div>
            </div>
        </div>
   )
}

export default Footer