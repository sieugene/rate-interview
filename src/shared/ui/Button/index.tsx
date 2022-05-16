/* eslint-disable react-native/no-inline-styles */
import styled from '@emotion/native';
import React from 'react';
import {StyleProp, TouchableOpacityProps, ViewStyle} from 'react-native';
import {ButtonVariants} from '../../../@app/providers/theme';
import Typography, {TypographyProps} from '../Typography';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@emotion/react';
import {IconProps} from 'react-native-vector-icons/Icon';

type Props = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  variant?: ButtonVariants;
  typographyProps?: Omit<TypographyProps, 'children'>;
  iconProps?: IconProps;
  icon?: string;
} & TouchableOpacityProps;
const Button = ({
  style,
  children,
  typographyProps,
  variant = 'flat',
  icon,
  iconProps,
  ...props
}: Props) => {
  const theme = useTheme();
  const textColor: TypographyProps['color'] =
    variant === 'flat' ? 'white' : 'primary';
  return (
    <Button.BaseButton
      style={[style || {}, {opacity: props.disabled ? 0.4 : 1}]}
      variant={variant}
      {...props}>
      {icon && (
        <Button.Icon
          name={icon}
          size={18}
          color={theme.colors[textColor]}
          {...iconProps}
        />
      )}
      <Typography color={textColor} {...typographyProps}>
        {children}
      </Typography>
    </Button.BaseButton>
  );
};
Button.BaseButton = styled.TouchableOpacity<Pick<Props, 'variant'>>`
  ${({theme, variant}) => variant && theme.buttons[variant]}
  flex-direction: row;
`;

Button.Icon = styled(Icon)`
  margin-right: 10px;
`;

export default Button;
