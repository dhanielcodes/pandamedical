import React from 'react';
import MenuCaret from '../../../shared/themes/assets/images/menu-caret-right.svg';

interface IProps {
  image: string;
  title: string;
  iconClassName?: string;
  hasBorder?: boolean;
  onClick?: () => void;
}

const SideMenuItem = ({
  image,
  title,
  iconClassName,
  hasBorder,
  onClick,
}: IProps) => (
  <div
    className={`DashboardSideMenu-menu-item ${
      hasBorder && 'menu-item-border-bottom'
    }`}
    onClick={onClick}
  >
    <div className="DashboardSideMenu-menu-item-icon-title">
      <div className="DashboardSideMenu-menu-item-icon">
        <img src={image} alt={title} className={iconClassName} />
      </div>

      <div>
        <p>{title}</p>
      </div>
    </div>

    <div>
      <img
        src={MenuCaret}
        alt="caret"
        className="DashboardSideMenu-menu-item-caret"
      />
    </div>
  </div>
);

SideMenuItem.defaultProps = {
  iconClassName: '',
  hasBorder: '',
  onClick: () => {},
};

export default SideMenuItem;
