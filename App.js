import React, {useState} from 'react'
import Header from './components/Header'
import { View, StyleSheet } from 'react-native'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const  [items, setItems] = useState([
    {id: uuidv4(), text: 'Corn'},
    {id: uuidv4(), text: 'Greens'},
    {id: uuidv4(), text: 'Beans'},
    {id: uuidv4(), text: 'Potaters'},
  ])

  const title= 'Shopping List'
  return (
    <View style={styles.container}>
      <Header title={title}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    
  }
})



export default App
