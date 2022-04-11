import styled from 'styled-components/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from "react-native";

export const ListFieldViewWrapper = styled.View`
    width: ${(props)=> windowWidth/props.colCount}px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`