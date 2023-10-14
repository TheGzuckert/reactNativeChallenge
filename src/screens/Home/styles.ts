import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: { // Centraliza verticalmente o conteúdo do container
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',// Centraliza horizontalmente o conteúdo deste container
    marginTop: 100,
  },
  header: {
    width: 400,
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 110,
    height: 32,
    marginTop: 30,
    top: 15,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#F2F2F2',
    padding: 20,
    fontSize: 16,
    top: 50,
    flex: 1,
    marginLeft: 24,
  },
  button: {
    "top": 50,
    "marginLeft": 4,
    "marginRight": 24,
    backgroundColor: '#1E6F9F',
    padding: 18,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flexDirection: 'row',
    marginLeft: 24, // Margem esquerda para alinhar à esquerda da página
    marginTop: 56,
    marginBottom: 20
  },
  created: {
    flex: 2,
    color: '#4EA8DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
  done: {
    color: '#8284FA',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 20,
  },
  borderTask: {
    height: 1,
    backgroundColor: '#333333',
    marginLeft: 23,
    marginRight: 23,
  },
  clipBoard:{
    width: 56,
    height: 56,
    marginTop: 30,
    marginLeft: 165,
  },
  emptyCommentBold:{
    color:'#808080',
    textAlign:'center',
    fontWeight: 'bold',
    marginTop: 30
  },
    emptyComment: {
    color: '#808080',
    textAlign: 'center',
  }

})
