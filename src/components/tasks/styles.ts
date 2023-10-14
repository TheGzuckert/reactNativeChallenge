import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 8,
  },
  tasks: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginLeft: 8,
  },
  buttonCheck: {
    width: 56,
    height: 56,
    backgroundColor: '#262626',
    alignItems: 'center', // para alinhar na horizontal
    justifyContent: 'center'
  },
  buttonRemove: {
    width: 56,
    height: 56,
    backgroundColor: '#262626',
    alignItems: 'center', // para alinhar na horizontal
    justifyContent: 'center'
  },
  ckeckIcon:{
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems:  'center',
  },
  trashkIcon: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})