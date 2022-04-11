import styled from 'styled-components/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from "react-native";

export const SpecificUserView = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TableTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    padding: 10px 0px;

`
export const PostView = styled.View`
    width: ${windowWidth}px;
    minHeight: ${windowHeight}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PostItem = styled.Text`
    font-size: 10px;
`
export const TodoRow = styled.View`
    width: ${windowWidth}px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TodoElement = styled.Text`
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: ${props => props.bold || "normal"};
    color: ${props => props.color || 'black'};
`