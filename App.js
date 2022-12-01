import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {

  const [code, setCode] = useState(['', '', '', '']);

  const inputRef0 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();



  const onInput = (e, index, nextElement) => {
    // key - is value inputed in Text input
    // index is index of Text input
    const { key } = e.nativeEvent

    const newCode = [...code];
    if (key === 'Backspace') {
      newCode[index] = ''
    }
    else {
      newCode[index] = key.trim();
      nextElement?.current?.focus();
    }
    return setCode(newCode);

  }


  return (
    <View style={styles.container}>
      <TextInput value={code[0]} ref={inputRef0} onKeyPress={
        (e) => {
          onInput(e, 0, inputRef1);
        }
      } style={styles.textInput} />


      <TextInput value={code[1]} ref={inputRef1} onKeyPress={
        (e) => {
          onInput(e, 1, inputRef2)
        }
      } style={styles.textInput} />

      <TextInput value={code[2]} ref={inputRef2} onKeyPress={
        (e) => {
          onInput(e, 2, inputRef3)
        }
      } style={styles.textInput} />

      <TextInput value={code[3]} ref={inputRef3} onKeyPress={
        (e) => onInput(e, 3)
      } style={styles.textInput} />


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 35
  },
  textInput: {
    // backgroundColor: 'red',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    borderColor: 'gray'
  }

});
