import styled from '@emotion/native';
import React from 'react';
import {
  Modal as ModalRN,
  ModalProps,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  children: React.ReactNode;
  onClose: () => void;
} & ModalProps;
export const Modal = ({children, onClose, ...modalProps}: Props) => {
  return (
    <>
      <ModalRN
        animationType="fade"
        transparent={true}
        statusBarTranslucent
        onRequestClose={onClose}
        {...modalProps}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Modal.Overlay />
        </TouchableWithoutFeedback>
        <Modal.FlexCenter>{children}</Modal.FlexCenter>
      </ModalRN>
    </>
  );
};

Modal.FlexCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

Modal.Overlay = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #00000063;
  height: 100%;
  width: 100%;
`;

Modal.shadow = StyleSheet.create({
  modalShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
