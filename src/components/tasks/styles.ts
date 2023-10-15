import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonRemove: {
    width: 56,
    height: 56,
    backgroundColor: '#262626',
    alignItems: 'center',
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