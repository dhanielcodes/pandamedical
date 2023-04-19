import React from 'react';
import SearchIcon from '../themes/assets/images/search-icon.svg';

interface Props {
  placeholder: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: () => void;
  onBlur?: () => void;
}

const SearchInput = ({
  placeholder,
  value,
  className,
  onChange,
  onKeyUp,
  onBlur,
}: Props) => (
  <div className={`SearchInput ${className}`}>
    <form className="SearchInput-form">
      <img src={SearchIcon} alt="search" className="SearchInput-icon" />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
      />
    </form>
  </div>
);

SearchInput.defaultProps = {
  onKeyUp: () => {},
  onBlur: () => {},
  className: '',
};

export default SearchInput;
