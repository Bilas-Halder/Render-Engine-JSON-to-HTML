import React from "react";
import {useDispatch} from "react-redux";
import Div from "../components/Div";
import Section from "../components/Section";
import H1 from "../components/H1";
import Icon from "../components/Icon";
import ButtonCus from "../components/Button";
import Img from "../components/Img";
import {setNewConfig} from "../redux/reducers/componentConfig";

const MakeComponent = ({children, payload}) => {
    const dispatch = useDispatch();

    const componentNames = {
        Section: <Section></Section>,
        Div: <Div></Div>,
        Container: <Div></Div>,
        H1: <H1></H1>,
        Icon: <Icon></Icon>,
        Button: <ButtonCus></ButtonCus>,
        Img: <Img></Img>,
    };

    dispatch(
        setNewConfig({
            children,
            ...payload,
        })
    );

    return <>{componentNames[payload?.componentName]}</>;
};
export default MakeComponent;
