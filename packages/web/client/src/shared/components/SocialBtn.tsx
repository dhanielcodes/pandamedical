import React from 'react';

interface Props {
  name: string;
  buttonClassName?: string;
  icon?: boolean;
  image?: boolean;
  imageClassName?: string;
  iconClass?: string;
  src?: string;
  onClick?: () => void;
}

const SocialBtn = ({
  name,
  icon,
  buttonClassName,
  imageClassName,
  image,
  iconClass,
  src,
  onClick,
}: Props) => (
  <div className="SocialBtn">
    <button
      type="button"
      className={`${buttonClassName} SocialBtn-social`}
      onClick={onClick}
    >
      <span className="SocialBtn-content">
        {icon && <i className={`${iconClass} social-icon`} />}
        {image && (
          <img
            src={src}
            alt={name}
            className={`${imageClassName} social-icon`}
          />
        )}
        Continue with {name}
      </span>
    </button>
  </div>
);

SocialBtn.defaultProps = {
  buttonClassName: '',
  icon: false,
  image: false,
  imageClassName: '',
  src: '',
  iconClass: '',
  onClick: () => {},
};

export default SocialBtn;
