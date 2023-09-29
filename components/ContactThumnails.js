import React from 'react';
import { StyleSheet, View,TouchableOpacity,Image,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

const ContactThumbnail= ({avatar, name,  phone})=>
 {
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: avatar,
          }}
          style={styles.avatar}
        />
      {name !== '' && <Text style={styles.name}>{name}</Text>}

      {phone !== '' && (
        <View style={styles.phoneSection}>
          <Icon name="phone" size={16} style={{ color: "blue" }} />
          <Text style={styles.phone}>{phone}</Text>
        </View>
      )}
    </View>
  );
}

export default ContactThumbnail;

ContactThumbnail.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  phone: PropTypes.string,
};

ContactThumbnail.defaultProps = {
  name: '',
  phone: '',
  textColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 2,
  },
  name: {
    fontSize: 20,
    marginTop: 24,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  phoneSection: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: 'bold',
  },
});