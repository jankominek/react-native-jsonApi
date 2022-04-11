import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity } from 'react-native'
import { ListFieldView } from './ListFieldView';
import { UserRowView, UsersView } from './Users.styled'

export const Users = ({navigation}) => {

  const [userData, setUserData] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect( () => {
    prepareData();
  }, [])

  useEffect( () => {
      if(userData && todoData && posts){
          const preparedData = userData.map( (user, index) => {
            const countOftodos = todoData.filter( (todo) => todo.userId === user.id && todo.completed).length;
            const countOfPosts = posts.filter( (post) => post.userId === user.id).length;
            console.log(index, countOftodos, countOfPosts)
            return {
                id: user.id,
                fname: user.username,
                lname : user.name,
                email : user.email,
                todoCount : countOftodos,
                postCount : countOfPosts
            };
        })
        console.log("prepared : ", preparedData)
        setAllData(preparedData)
      }
  }, [userData, todoData, posts]);


  const prepareData = () => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then( (response) => {
          setUserData(response.data)
      }).catch((err)=> console.log(err))
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then( (response) => {
          setTodoData(response.data)
      }).catch((err)=> console.log(err))
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
          setPosts(response.data)
      }).catch((err)=> console.log(err))

  }
//   allData && console.log("dataa : ", allData);



  const dataToRender = (item) => (
      <TouchableOpacity onPress={ () => navigation.navigate("specificUser", {userId: item.id, username: item.fname})}>
      <UserRowView key={item.id}>
          <ListFieldView colCount={5.1} text={item.fname}/>
          <ListFieldView colCount={5.1} text={item.lname}/>
          <ListFieldView colCount={5.1} text={item.email}/>
          <ListFieldView colCount={5.1} text={item.postCount}/>
          <ListFieldView colCount={5.1} text={item.todoCount}/>
      </UserRowView>
      </TouchableOpacity>
  )
  return (
    <UsersView>
            <UserRowView>
          <ListFieldView colCount={5.1} text={"username"}/>
          <ListFieldView colCount={5.1} text={"name"}/>
          <ListFieldView colCount={5.1} text={"email"}/>
          <ListFieldView colCount={5.1} text={"posts"}/>
          <ListFieldView colCount={5.1} text={"todos"}/>
        </UserRowView>
                {allData && 
                <ScrollView>
                {allData.map( (item) => dataToRender(item))}
            </ScrollView>
            
            }
        
    </UsersView>
  ) 
}
