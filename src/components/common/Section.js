import React from 'react';
import { View } from 'react-native';

const Section = (props) => (
        <View style={styles.section}>
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
