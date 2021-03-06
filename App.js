import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppWrapper } from './App.styled';
import { Users } from './Users';
import { SpecificUser } from './SpecificUser';
import { SpecificPost } from './SpecificPost';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <AppWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="users" component={Users}/>
          <Stack.Screen name="specificUser" component={SpecificUser} />
          <Stack.Screen name="specificPost" component={SpecificPost} />
        </Stack.Navigator>
      </NavigationContainer>
      
    </AppWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
