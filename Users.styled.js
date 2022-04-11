import styled from 'styled-components/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from "react-native";

export const UsersView = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const UserRowView = styled.View`
    display: flex;
    height: ${windowHeight/12}px;
    width: ${windowWidth}px;
    flex-direction: row;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 1px 0px;
    justify-content: space-between;
`