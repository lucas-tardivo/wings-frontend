import LanguageIcon from '@mui/icons-material/Language'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import RedditIcon from '@mui/icons-material/Reddit'
import { BsDiscord } from 'react-icons/bs/'
import styled from 'styled-components'
import { Lock } from '@mui/icons-material'
const CustomWebSiteIcon = styled(LanguageIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomTwitterIcon = styled(TwitterIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomTelegramIcon = styled(TelegramIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomInstagramIcon = styled(InstagramIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomGitHubIcon = styled(GitHubIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomRedditIcon = styled(RedditIcon)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 2px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomBsDiscord = styled(BsDiscord)`
  background-color: #156ca4;
  border-radius: 20%;
  padding: 3px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`
const CustomAudit = styled(Lock)`
  background-color: #156ca4;
  border-radius: 50%;
  padding: 3px;
  margin-right: 4px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const iconsHelper = (contacts) => {
  return (
    <>
      {contacts.map(
        (item, index) =>
          item.link && (
            <a key={index} target='_blank' href={`https://${item.link}`} rel="noreferrer">
              {contactAux[item.id]}
            </a>
          )
      )}
    </>
  )
}

const contactAux = {
  website: <CustomWebSiteIcon fontSize='medium' />,
  twitter: <CustomTwitterIcon fontSize='medium' />,
  telegram: <CustomTelegramIcon fontSize='medium' />,
  instagram: <CustomInstagramIcon fontSize='medium' />,
  reddit: <CustomRedditIcon fontSize='medium' />,
  github: <CustomGitHubIcon fontSize='medium' />,
  discord: <CustomBsDiscord fontSize='30px' />,
  audit: <CustomAudit fontSize='medium' />
}
