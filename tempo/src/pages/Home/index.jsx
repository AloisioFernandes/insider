import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

const myList = [
  {
    "date": "11/03",
    "weekday": "Qui",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "12/03",
    "weekday": "Sex",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "clear_night"
  },
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 29,
    "min": 18,
    "description": "Ensolarado",
    "condition": "clear_day"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 29,
    "min": 18,
    "description": "Tempestades",
    "condition": "cloudly_day"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "cloudly_night"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 28,
    "min": 18,
    "description": "Tempestades",
    "condition": "rain"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 19,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 27,
    "min": 19,
    "description": "Tempestades",
    "condition": "cloud"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 28,
    "min": 20,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 28,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  }
]

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />
      <FlatList 
        horizontal
        contentContainerStyle={{paddingBottom: '5%'}}
        style={styles.list}
        data={myList}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} /> }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%'
  },

  list: {
    marginTop: 10,
    marginLeft: 10
  }
})