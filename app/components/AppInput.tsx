import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface AppInputProps extends TextInputProps {
  style?: any;
}

export default function AppInput({ style, ...props }: AppInputProps) {
  return (
    <TextInput
      placeholderTextColor="#888"
      autoCapitalize="none"
      style={style}
      {...props}
    />
  );
}
