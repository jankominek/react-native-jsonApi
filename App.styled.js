import styled from "styled-components/native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { Dimensions } from "react-native";
export const AppWrapper = styled.View`
    width: ${windowWidth}px;
    height: ${windowHeight}px;
`