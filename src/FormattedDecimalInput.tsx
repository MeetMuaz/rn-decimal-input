import React, { useState, useEffect } from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  TextStyle,
} from 'react-native';

type Props = TextInputProps & {
  value: string;
  onChangeText: (value: string) => void;
  style?: TextStyle | TextStyle[];
};

const formatNumber = (text: string): string => {
  const clean = text.replace(/[^0-9.]/g, '');
  const floatVal = parseFloat(clean);
  if (isNaN(floatVal)) return '0.00';
  return floatVal.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const FormattedDecimalInput: React.FC<Props> = ({
  value,
  onChangeText,
  style,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(formatNumber(value));

  useEffect(() => {
    setInternalValue(formatNumber(value));
  }, [value]);

  const handleChange = (text: string) => {
    const clean = text.replace(/[^0-9.]/g, '');
    const floatVal = parseFloat(clean);
    const formatted = isNaN(floatVal)
      ? ''
      : floatVal.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
    setInternalValue(formatted);
    onChangeText(clean); // send raw value
  };

  return (
    <TextInput
      value={internalValue}
      onChangeText={handleChange}
      keyboardType="numeric"
      style={[styles.input, style]} // merge default + user styles
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
  },
});
