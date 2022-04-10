import styled from 'styled-components/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from "react-native";

export const ListFieldViewWrapper = styled.View`
    width: ${(props)=> windowWidth/colCount}px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`