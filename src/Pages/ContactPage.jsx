import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Title, UlContact, SocialMediaIcon, } from "../CSS/Pages/contactPage/contactPageStyles";
import CardContact from "../components/contactPage/cardsContact"
import GlobalStyles from "../CSS/globalStyles";

function contactPage() {
    return (
        <>
            <UlContact>
                <Title>Contact Page</Title>
                <li>
                    <SocialMediaIcon href="https://www.instagram.com/ll_caas._/" className='social-medias-icons'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialMediaIcon>
                </li>
                <li>
                    <SocialMediaIcon href="https://twitter.com/LucasCa74716775" className='social-medias-icons'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialMediaIcon>
                </li>
                <li>
                    <SocialMediaIcon href="https://discord.com/channels/@me" className='social-medias-icons'>
                        <FontAwesomeIcon icon={faDiscord} />
                    </SocialMediaIcon>
                </li>
                <li>
                    <SocialMediaIcon href="https://github.com/GoncalvesLucasC" className='social-medias-icons'>
                        <FontAwesomeIcon icon={faGithub} />
                    </SocialMediaIcon>
                </li>

            </UlContact>
            <hr />
            <CardContact />
            <GlobalStyles />
        </>
    )
}

export default contactPage;