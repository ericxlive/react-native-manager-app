import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Section } from './Section';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDeclined }) => {
    const { containerStyle, textStyle, sectionStyle } = styles;
    return (
        <Modal visible={visible} transparent animationType="slide" onRequestClose={() => {}}>
            <View style={containerStyle}>
                <Section style={sectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </Section>
                <Section>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDeclined}>No</Button>
                </Section>   
            </View>
        </Modal>
    );
};

const styles = {
    sectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40 
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm }; // Named export.
