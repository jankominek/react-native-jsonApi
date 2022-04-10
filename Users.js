import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { UsersView } from './Users.styled'

export const Users = () => {

  const [userData, setUserData] = useState([]);
  const [todoData, setTodoData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [allData, setAllData] = useState([]);
  useEffect( () => {
    prepareData();
  }, [])

  useEffect( () => {
      if(userData && todoData && posts){
        console.log("XXX : ", todoData.length)
          const preparedData = userData?.map( (user) => {
            const countOftodos = todoData?.filter( (todo) => todo.userId === user.id && todo.completed).length;
            const countOfPosts = posts?.filter( (post) => post.userId === user.id).length;
            return {
                fname: user.username,
                lname : user.name,
                email : user.email,
                todoCount : countOftodos,
                postCount : countOfPosts
            };
        })
        console.log("prepared : ", preparedData.length)
        setAllData(preparedData)
      }
  }, [userData, todoData, posts])


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
  allData && console.log("dataa : ", allData.length);
  return (
    <UsersView>
        
    </UsersView>
  )
}
