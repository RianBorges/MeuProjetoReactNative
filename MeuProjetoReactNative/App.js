import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function RianViniciusFerreiraBorges({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bem-vindo ao app!!</Text>
      <Pressable
        onPress={() => navigation.navigate('Cardapio')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Rian Vinicius Ferreira Borges</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Sugestoes')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Sugestões</Text>
      </Pressable>
    </View>
  );
}

function SobreMim() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('./assets/favicon.png')}/>
      <Text>Meu Nome é Rian Vinicius, tenho 18 anos, estou na faculdade Senac em Santo Amaro, nunca tive oportunidade de estagiar, sou louco para estagiar.</Text>
    </View>
  );
}

function Experiencias() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Java, Kotlin, Android e React Native</Text>
      <Text>Link para GitHub: </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={RianViniciusFerreiraBorges} />
        <Stack.Screen name="Cardapio" component={SobreMim} />
        <Stack.Screen name="Sugestoes" component={Experiencias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
