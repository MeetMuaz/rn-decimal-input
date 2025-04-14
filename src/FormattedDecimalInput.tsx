import React, { useState, useEffect } from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

type Props = TextInputProps & {
  value: string;
  onChangeText: (value: string) => void;
  style?: TextStyle | TextStyle[];
  currency?: string; // Optional currency prop
};

const formatNumber = (text: string, currency?: string): string => {
  const clean = text.replace(/[^0-9.]/g, '');
  const floatVal = parseFloat(clean);
  
  if (isNaN(floatVal)) return currency ? `${currency}0.00` : '0.00';
  
  const formatted = floatVal.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return currency ? `${currency}${formatted}` : formatted;
};

export const FormattedDecimalInput: React.FC<Props> = ({
  value,
  onChangeText,
  style,
  currency,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(formatNumber(value, currency));

  useEffect(() => {
    setInternalValue(formatNumber(value, currency));
  }, [value, currency]);

  const handleChange = (text: string) => {
    // Remove currency symbol and non-numeric characters for parsing
    const cleanText = text.replace(currency || '', '').replace(/[^0-9.]/g, '');
    const floatVal = parseFloat(cleanText);
    
    // Format with or without currency symbol
    const formatted = isNaN(floatVal)
      ? currency ? `${currency}` : ''
      : formatNumber(cleanText, currency);
    
    setInternalValue(formatted);
    onChangeText(cleanText); // send raw value without currency and formatting
  };

  return (
    <TextInput
      value={internalValue}
      onChangeText={handleChange}
      keyboardType="numeric"
      style={style}
      {...rest}
    />
  );
};
