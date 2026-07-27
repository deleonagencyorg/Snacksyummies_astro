import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  XIcon,
  WhatsappIcon,
  TelegramIcon
} from 'react-share';

const SocialShare = ({
  url,
  title,
  description = '',
  hashtags = [],
  iconSize = 32,
  round = true,
  className = '',
  buttonClassName = '',
  platforms = ['facebook', 'twitter', 'instagram', 'telegram'],
  labels = {
    facebook: 'Facebook',
    twitter: 'Twitter',
    whatsapp: 'WhatsApp',
    instagram: 'Instagram',
    telegram: 'Telegram'
  },
  showLabels = false
}) => {
  const renderButtons = () => {
    const buttons = [];

    if (platforms.includes('facebook')) {
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url || '')}`;
      buttons.push(
        <div key="facebook" className={`inline-block ${buttonClassName}`}>
          <a 
            href={facebookShareUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="inline-flex items-center justify-center transition-transform hover:scale-105"
            style={{ width: iconSize, height: iconSize, display: 'inline-flex' }}
          >
            <FacebookIcon size={iconSize} round={round} />
            {showLabels && <span className="block text-xs mt-1">{labels.facebook}</span>}
          </a>
        </div>
      );
    }

    if (platforms.includes('twitter')) {
      const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url || '')}&text=${encodeURIComponent(title || '')}${hashtags.length > 0 ? `&hashtags=${encodeURIComponent(hashtags.join(','))}` : ''}`;
      buttons.push(
        <div key="twitter" className={`inline-block ${buttonClassName}`}>
          <a 
            href={twitterShareUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Twitter / X"
            className="inline-flex items-center justify-center transition-transform hover:scale-105"
            style={{ width: iconSize, height: iconSize, display: 'inline-flex' }}
          >
            <XIcon size={iconSize} round={round} />
            {showLabels && <span className="block text-xs mt-1">{labels.twitter}</span>}
          </a>
        </div>
      );
    }

    if (platforms.includes('instagram')) {
      buttons.push(
        <div key="instagram" className={`inline-block ${buttonClassName}`}>
          <a 
            href="https://www.instagram.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex items-center justify-center transition-transform hover:scale-105"
            style={{ width: iconSize, height: iconSize, display: 'inline-flex' }}
            onClick={(e) => {
              const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
              if (isMobile) {
                window.location.href = 'instagram://app';
                setTimeout(() => {
                  window.open('https://www.instagram.com/', '_blank');
                }, 500);
                e.preventDefault();
              }
            }}
          >
            <svg 
              width={iconSize} 
              height={iconSize} 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="32" height="32" rx={round ? "16" : "4"} fill="url(#instagram-gradient)" />
              <path 
                d="M16 10.8C13.128 10.8 10.8 13.128 10.8 16C10.8 18.872 13.128 21.2 16 21.2C18.872 21.2 21.2 18.872 21.2 16C21.2 13.128 18.872 10.8 16 10.8ZM16 19.3333C14.1593 19.3333 12.6667 17.8407 12.6667 16C12.6667 14.1593 14.1593 12.6667 16 12.6667C17.8407 12.6667 19.3333 14.1593 19.3333 16C19.3333 17.8407 17.8407 19.3333 16 19.3333ZM22.624 10.5893C22.624 11.2619 22.0792 11.8067 21.4067 11.8067C20.7341 11.8067 20.1893 11.2619 20.1893 10.5893C20.1893 9.9168 20.7341 9.372 21.4067 9.372C22.0792 9.372 22.624 9.9168 22.624 10.5893ZM23.9573 12.812C23.896 11.4987 23.5973 10.3427 22.6347 9.38C21.672 8.41733 20.516 8.11867 19.2027 8.05733C17.8453 7.98 13.784 7.98 12.4267 8.05733C11.1133 8.11867 9.95733 8.41733 8.99467 9.38C8.032 10.3427 7.73333 11.4987 7.672 12.812C7.59467 14.1693 7.59467 18.2307 7.672 19.588C7.73333 20.9013 8.032 22.0573 8.99467 23.02C9.95733 23.9827 11.1133 24.2813 12.4267 24.3427C13.784 24.42 17.8453 24.42 19.2027 24.3427C20.516 24.2813 21.672 23.9827 22.6347 23.02C23.5973 22.0573 23.896 20.9013 23.9573 19.588C24.0347 18.2307 24.0347 14.1693 23.9573 12.812ZM21.696 20.8933C21.408 21.6173 20.8507 22.1747 20.1267 22.4627C19.0427 22.8933 16.4773 22.792 16 22.792C15.5227 22.792 12.9573 22.8933 11.8733 22.4627C11.1493 22.1747 10.592 21.6173 10.304 20.8933C9.87333 19.8093 9.97467 17.244 9.97467 16.7667C9.97467 16.2893 9.87333 13.724 10.304 12.64C10.592 11.916 11.236 11.3587 11.8733 11.0707C12.9573 10.64 15.5227 10.7413 16 10.7413C16.4773 10.7413 19.0427 10.64 20.1267 11.0707C20.8507 11.3587 21.408 11.916 21.696 12.64C22.1267 13.724 22.0253 16.2893 22.0253 16.7667C22.0253 17.244 22.1267 19.8093 21.696 20.8933Z" 
                fill="white"
              />
              <defs>
                <linearGradient id="instagram-gradient" x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD521"/>
                  <stop offset="0.3" stopColor="#F50000"/>
                  <stop offset="0.6" stopColor="#B900B4"/>
                  <stop offset="1" stopColor="#4E00C2"/>
                </linearGradient>
              </defs>
            </svg>
            {showLabels && <span className="block text-xs mt-1">{labels.instagram || 'Instagram'}</span>}
          </a>
        </div>
      );
    }

    if (platforms.includes('whatsapp')) {
      buttons.push(
        <div key="whatsapp" className={`inline-block ${buttonClassName}`}>
          <WhatsappShareButton url={url} title={`${title}\n${description}`}>
            <WhatsappIcon size={iconSize} round={round} />
            {showLabels && <span className="block text-xs mt-1">{labels.whatsapp}</span>}
          </WhatsappShareButton>
        </div>
      );
    }

    if (platforms.includes('telegram')) {
      buttons.push(
        <div key="telegram" className={`inline-block ${buttonClassName}`}>
          <TelegramShareButton url={url} title={`${title}\n${description}`}>
            <TelegramIcon size={iconSize} round={round} />
            {showLabels && <span className="block text-xs mt-1">{labels.telegram}</span>}
          </TelegramShareButton>
        </div>
      );
    }

    return buttons;
  };

  return (
    <div className={`social-share flex gap-2 items-center ${className}`}>
      {renderButtons()}
    </div>
  );
};

export default SocialShare;
