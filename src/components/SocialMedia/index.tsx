import * as React from 'react';
import FacebookIcon from '../../assets/Icons/FacebookIcon';
import LinkedInIcon from '../../assets/Icons/LinkedInIcon';
import InstagramIcon from '../../assets/Icons/InstagramIcon';
import WhatsappIcon from '../../assets/Icons/WhatsappIcon';

export default function SocialMedia({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className="flex gap-4 pb-6 pt-2">
      <a
        className={`w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all ${className}`}
        target="_blank"
        href="https://www.facebook.com/ibrahim.drissi.129?_rdc=1&_rdr"
      >
        <FacebookIcon className={`w-7 h-7 ${iconClassName}`} />
      </a>
      <a
        className={`w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all ${className}`}
        target="_blank"
        href="https://www.linkedin.com/in/ibrahim-drissi-424838244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      >
        <LinkedInIcon className={`w-7 h-7 ${iconClassName}`} />
      </a>
      <a
        className={`w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all ${className}`}
        target="_blank"
        href="https://www.instagram.com/sa7i7_albokhari/"
      >
        <InstagramIcon className={`w-7 h-7 ${iconClassName}`} />
      </a>
      <a
        className={`w-fit bg-tertiary rounded-full p-2 hover:cursor-pointer hover:scale-110 transition-all ${className}`}
        target="_blank"
        href="https://wa.me/212619548744"
      >
        <WhatsappIcon className={`w-7 h-7 ${iconClassName}`} />
      </a>
    </div>
  );
}
