import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Task } from '../../components/tasks'

export function Home() {
  const [tasks, setNewTask] =  useState<String[]>([]);
  const [taskName, setTaskName] = useState('');


  function handleTaskAdd(){
    if (tasks.includes(taskName)){
      return  Alert.alert(' A task já foi adicionada', 'Adicione uma tafera diferente')
    }
    setNewTask(prevState => [...prevState, taskName])
    setTaskName('')
  }

  function handleTaskRemove(task: String) {

    Alert.alert('Remover Task', `Tem certeza que você remover ${task}?`,[
      {
        text: 'Sim',
        onPress: () =>  Alert.alert('Task removida', 'Task removida com sucesso')
      },
      {
        text: 'Não',
      }
    ])

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/todoLogo.png')}
        />
        <View style={styles.form} >
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            onChangeText={setTaskName}
            value={taskName}
          />
          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
            <Image
              source={require('../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
      {/* Começo da contagem de Criados e concluidos  */}
      <View >
        <View style={styles.status}>
          <Text style={styles.created}>
            Criadas
          </Text>
          <Text style={styles.done}>
            Concluídas
          </Text>
        </View >
        {/* fim da contagem de Criados e concluidos  */}
        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              onRemove={() => handleTaskRemove(item)}
              onCheck={() => handleTaskRemove(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <View style={styles.borderTask}></View>
                <Image style={styles.clipBoard}
                  source={require('../../../assets/Clipboard.png')}
                />
                <Text style={styles.emptyCommentBold}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyComment}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}