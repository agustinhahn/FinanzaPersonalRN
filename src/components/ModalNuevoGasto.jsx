import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import { Input } from 'react-native-elements';

const ModalNuevoGasto = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [tags, setTags] = useState([{ label: 'Example Tag', value: 'example_tag' }]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [newTag, setNewTag] = useState('');
  const [gasto , setGasto] = useState(null)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const guardarGasto = () =>{
    let gastoObject = {
      title: textInput,
      amount: numberInput,
      tag: selectedTag
    }
    setGasto(gastoObject)
    setModalVisible(!isModalVisible);
  }

  const addNewTag = () => {
    if (newTag.trim() !== '') {
      const newTagObj = { label: newTag, value: newTag.toLowerCase().replace(' ', '_') };
      setTags([...tags, newTagObj]);
      setNewTag('');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.label}>Text Input</Text>
          <Input
            placeholder="Enter text"
            value={textInput}
            onChangeText={setTextInput}
          />

          <Text style={styles.label}>Number Input</Text>
          <Input
            placeholder="Enter number"
            keyboardType="numeric"
            value={numberInput}
            onChangeText={setNumberInput}
          />

          <Text style={styles.label}>Tags</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedTag(value)}
            items={tags}
          />

          <Text style={styles.label}>Add New Tag</Text>
          <View style={styles.newTagContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="New tag"
              value={newTag}
              onChangeText={setNewTag}
            />
            <Button title="Add" onPress={addNewTag} />
          </View>
          <Button title='Guardar gasto' onPress={guardarGasto}  />
          <Button title="Close Modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  newTagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    marginRight: 10,
    flex: 1,
  },
});

export default ModalNuevoGasto;
