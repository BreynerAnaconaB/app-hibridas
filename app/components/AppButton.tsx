import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface AppButtonProps extends TouchableOpacityProps {
  label: string;
  textStyle?: any;
  style?: any;
}

export default function AppButton({ label, textStyle, style, ...props }: AppButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} {...props}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
