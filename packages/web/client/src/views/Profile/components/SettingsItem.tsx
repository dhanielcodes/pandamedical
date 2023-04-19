import React from 'react';
import { Link } from 'react-router-dom';
import MenuCaret from '../../../shared/themes/assets/images/menu-caret-right.svg';

interface IProps {
  title: string;
  value?: string;
  valueStyle?: string;
  linkTo: string;
}

const SettingsItem = ({ title, value, valueStyle, linkTo }: IProps) => (
  <Link to={linkTo} className="link">
    <div className="Profile-settings-item">
      <div className="Profile-settings-item-title">{title}</div>

      <div className="Profile-settings-item-value-caret">
        <div className={`Profile-settings-item-value ${valueStyle}`}>
          {value}
        </div>

        <img
          src={MenuCaret}
          alt="caret"
          className="Profile-settings-item-caret"
        />
      </div>
    </div>
  </Link>
);

SettingsItem.defaultProps = {
  value: '',
  valueStyle: '',
};

export default SettingsItem;
