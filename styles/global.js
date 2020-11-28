import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1, // this ensures container views are taking up all available space on screen
    padding: 50
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  }
})