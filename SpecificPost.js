import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { SpecificUserView, TableTitle, TodoElement, TodoRow } from './SpecificUser.styled'

export const SpecificPost = ({navigation, route}) => {

    const [comments, setComments] = useState([]);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${route.params.postId}`)
        .then((response)=>{
            setComments(response.data);
        })
    }, [])

  return (
    <SpecificUserView>
            <ScrollView style={{paddingBottom: 40}}>

            
                <TableTitle>Comments</TableTitle>
            {comments.map( (comment) => (
                <TodoRow key={comment.id}>
                    <TodoElement bold="bold">{comment.email}</TodoElement>
                    <TodoElement>{comment.body}</TodoElement>
                </TodoRow>
            ))}

            </ScrollView>
        </SpecificUserView>
  )
}
