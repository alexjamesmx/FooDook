import { StyleSheet } from 'react-native'
import { appcolor } from '../../constants/appcolor'

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    paddingBottom: 200,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    marginTop: 20,
    color: 'green',
  },
  icon: {
    color: '#12355B',
  },
  btnContainer: {
    marginTop: 10,
    color: 'black',
  },
  btnLogin: {
    backgroundColor: appcolor.boton,
    height: 50,
    borderRadius: 16,
    marginVertical: 16,
  },
  btnRegister: {
    height: 50,
    borderRadius: 16,
    borderColor: '#12355B',
    marginBottom: 40,
  },
  loginTitle: {
    fontWeight: 'bold',
    fontSize: appcolor.titulo,
    textAlign: 'center',
    marginBottom: 24,
  },
  loginsubTitle: {
    position: 'relative',
    fontWeight: 'bold',
    fontSize: appcolor.subtitle,
    textAlign: 'center',
  },
})
