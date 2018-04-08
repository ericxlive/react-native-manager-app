import React from 'react';
import { View } from 'react-native';

/**
 * The very last style passed from outside this component, the second one is going to overwrite
 * the default style.
 */
const Section = (props) => (
        <View style={[styles.section, props.style]}> 
            {props.children}
        </View>   
    );

const styles = {
    section: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // As row with its contents.
        borderColor: '#ddd',
        position: 'relative',
    }
};

export { Section };
