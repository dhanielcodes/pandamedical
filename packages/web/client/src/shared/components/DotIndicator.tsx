import React from 'react';

interface Iprops {
  color?: string;
  className?: string;
  text?: string;
}

const DotIndicator = ({ color, className, text }: Iprops) => {
  const style = {
    backgroundColor: color,
    fontSize: text ? '0.5em' : 'initial',
    display: text ? 'flex' : '',
    justifyContent: text ? 'center' : '',
  };
  return (
    <div className={`DotIndicator ${className}`} color={color} style={style}>
      {text}
    </div>
  );
};

DotIndicator.defaultProps = {
  color: '#E0ECDE',
  className: '',
  text: '',
};

export default DotIndicator;
