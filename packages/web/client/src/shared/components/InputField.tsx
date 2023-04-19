import React from 'react';

interface Props {
  type: string;
  name?: string;
  id?: string | undefined;
  placeholder?: string;
  value: string;
  className?: string;
  inputStyle?: string;
  borderStyle?: string;
  errorMessage?: string;
  isEmpty?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: () => void;
  onKeyDown?: (e: React.KeyboardEvent | undefined) => void;
  onBlur?: () => void;
  icon?: boolean;
  iconImage?: string;
  iconAlt?: string;
  iconClass?: string;
  iconStyle?: object;
  onIconClick?: () => void;
  maxLength?: number;
  pattern?: string | undefined;
}

const InputField = ({
  type,
  name,
  id,
  placeholder,
  value,
  className,
  inputStyle,
  borderStyle,
  errorMessage,
  isEmpty,
  onChange,
  onKeyUp,
  onKeyDown,
  onBlur,
  icon,
  iconAlt,
  iconImage,
  iconClass,
  iconStyle,
  onIconClick,
  maxLength,
  pattern,
}: Props) => (
  <div
    className={`InputField ${inputStyle}`}
    style={{ position: icon ? 'relative' : 'initial' }}
  >
    <div className="InputField-input-icon">
      <input
        className={`InputField-input ${className}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        style={
          errorMessage
            ? { border: isEmpty ? '1px solid #F75010' : '1px solid #FFCF5C' }
            : { border: borderStyle }
        }
        name={name}
        id={id}
        maxLength={maxLength}
        pattern={pattern}
      />

      {icon && (
        <img
          src={iconImage}
          alt={iconAlt}
          className={`${iconClass} InputField-icon`}
          style={iconStyle}
          onClick={name === 'password' ? onIconClick : undefined}
        />
      )}
    </div>
    <div className="error-msg">{errorMessage}</div>
  </div>
);

InputField.defaultProps = {
  placeholder: '',
  name: '',
  id: undefined,
  errorMessage: '',
  className: '',
  inputStyle: '',
  borderStyle: '',
  isEmpty: false,
  icon: false,
  iconImage: '',
  iconAlt: '',
  iconClass: '',
  iconStyle: {},
  onKeyUp: () => {},
  onKeyDown: () => {},
  onBlur: () => {},
  onIconClick: () => {},
  maxLength: undefined,
  pattern: undefined,
};

export default InputField;
