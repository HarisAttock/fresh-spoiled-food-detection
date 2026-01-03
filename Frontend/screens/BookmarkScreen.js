import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import themeContext from '../config/themeContext';
import DropDownPicker from 'react-native-dropdown-picker';
const BookmarkScreen = () => {
  const theme = useContext(themeContext);
  const [selectedFood, setSelectedFood] = useState('');
  const [bookmarkList, setBookmarkList] = useState([
    'Apple', 'Banana', 'Orange', 'Lemon', 'Cucumber', 'Tomato', 
  ]);
  const foodOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Lemon', value: 'Lemon' },
    { label: 'Cucumber', value: 'Cucumber' },
    { label: 'Tomato', value: 'Tomato' },
  ];

  const addToBookmark = () => {
    if (bookmarkList.includes(selectedFood)) {
      alert('This food is already added to the bookmark list.');
      return;
    }
    setBookmarkList([...bookmarkList, selectedFood]);
    setSelectedFood('');
  };

  const removeFromBookmark = (food) => {
    const updatedList = bookmarkList.filter((item) => item !== food);
    setBookmarkList(updatedList);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>

      <DropDownPicker
        items={foodOptions}
        defaultValue={selectedFood}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        onChangeItem={(item) => setSelectedFood(item.value)}
        placeholder="Select a food"
      />

      <TouchableOpacity style={styles.addButton} onPress={addToBookmark}>
        <Text style={[styles.buttonText,{color: theme.color}]}>Add to Bookmark</Text>
      </TouchableOpacity>

      {bookmarkList.length > 0 && (
        <Text style={styles.bookmarkListHeading}>Bookmark List:</Text>
      )}

      {bookmarkList.map((food, index) => (
        <View key={index} style={styles.bookmarkItem}>
          <Text>{food}</Text>
          <TouchableOpacity onPress={() => removeFromBookmark(food)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    backgroundColor: '#fafafa',
    marginTop:10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookmarkListHeading: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookmarkItem: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default BookmarkScreen;

