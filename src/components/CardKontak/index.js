import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CardKontak = ({id, kontakItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailKontak', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
        <Text style={styles.noHP}>No. HP : {kontakItem.nomorHP}</Text>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faEdit}
          color={'#1abc9c'}
          size={25}
          onPress={() => navigation.navigate('EditKontak', {id: id})}
        />
        <FontAwesomeIcon
          icon={faTimes}
          color={'#e74c3c'}
          size={25}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardKontak;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noHP: {
    fontSize: 12,
    color: 'grey',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
