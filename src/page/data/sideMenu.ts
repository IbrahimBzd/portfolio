import HomeIcon from '../../assets/icons/HomeIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import SkillsIcon from '../../assets/icons/SkillsIcon';
import ProjectsIcon from '../../assets/icons/ProjectsIcon';
import ContactMeIcon from '../../assets/icons/ContactMeIcon';
import InstaIcon from '../../assets/icons/InstaIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import googleIcon from '../../assets/icons/GoogleIcon';
import LinkedinIcon from '../../assets/icons/LinkedinIcon';

export function navigationItems(refsContext) {
  return [
    {
      id: 1,
      icon: HomeIcon,
      onClick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 2,
      icon: InfoIcon,
      onClick: () => {
        refsContext?.AboutRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
      },
    },
    {
      id: 3,
      icon: SkillsIcon,
      onClick: () => {
        refsContext?.SkillsRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
      },
    },
    {
      id: 4,
      icon: ProjectsIcon,
      onClick: () => {
        refsContext?.ProjectsRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
      },
    },
    {
      id: 5,
      icon: ContactMeIcon,
      onClick: () => {
        refsContext?.ContactMeRef.current?.scrollIntoView({
          behavior: 'smooth',
        });
      },
    },
  ];
}

export function socialMediaIcons() {
  return [
    {
      id: 1,
      icon: LinkedinIcon,
      link: 'https://www.linkedin.com/in/ibrahim-drissi-424838244/',
    },
    {
      id: 2,
      icon: InstaIcon,
      link: 'https://www.instagram.com/sa7i7_albokhari/?hl=fr',
    },
    {
      id: 3,
      icon: PhoneIcon,
      link: 'https://wa.me/212619548744',
    },
    {
      id: 4,
      icon: googleIcon,
      link: 'https://mail.google.com/mail/u/1/#inbox',
    },
  ];
}
