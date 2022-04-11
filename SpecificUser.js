import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { ListFieldView } from './ListFieldView';
import { SpecificUserView, TableTitle, TodoElement, TodoRow } from './SpecificUser.styled';

export const SpecificUser = ({navigation, route}) => {
    console.log("props : ", route.params)


    const [user, setUser] = useState();
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setUser(route.params);
        axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${route.params.userId}`)
            .then((response)=>{
                setTodos(response.data);
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${route.params.userId}`)
        .then((response)=>{
            setPosts(response.data);
        })
    }, [])
    console.log("TODOS : ", posts)
  return (
        <SpecificUserView>
            <ScrollView style={{paddingBottom: 40}}>

            
                <TableTitle>Todos</TableTitle>
            {todos.map( (todo) => (
                <TodoRow key={todo.id}>
                    <TodoElement bold="bold">{todo.title}</TodoElement>
                    <TodoElement color={todo.completed ? "green" : "red"}>{todo.completed ? "completed" : "uncompleted"}</TodoElement>
                </TodoRow>
            ))}
           

            
                <TableTitle>Posts</TableTitle>
                {posts.map( (post) => (
                    <TouchableOpacity onPress={ () => navigation.navigate("specificPost", {postId: post.id})}>
                        <TodoRow key={post.id}>
                            <TodoElement bold="bold">{post.title}</TodoElement>
                            <TodoElement>{post.body }</TodoElement>
                        </TodoRow>
                    </TouchableOpacity>
                ))}
            

            </ScrollView>
        </SpecificUserView>
    
  )
}
