import { View, Text, TouchableOpacity, Image } from 'react-native'
import { styles } from './styles' 

type Props = {
  task: String;
  onRemove: () => void
  onCheck: () => void
}

export function Task({ task, onRemove, onCheck }: Props){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonCheck} onPress={onCheck}>
        <Image style={styles.ckeckIcon}
          source={require('../../../assets/check.png')}
        />
      </TouchableOpacity>

      <Text style={styles.tasks}>
        {task}
      </Text>

      <TouchableOpacity style={styles.buttonRemove} onPress={onRemove}>
        <Image style={styles.trashkIcon}
          source={require('../../../assets/trash.png')}
        />
      </TouchableOpacity>

    </View> 
  )
}