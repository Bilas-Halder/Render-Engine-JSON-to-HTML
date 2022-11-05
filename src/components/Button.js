import React from "react";
import {useConfig, useHtmlSaver} from "../hooks/allHooks";

const ButtonCus = () => {
    const configs = useConfig();
    console.log(configs);
    const style = {...configs?.style?.desktop};
    const generalSetting = {...configs?.others?.general};

    useHtmlSaver({
        style: style,
        configs: configs,
        start: `<button class="${configs?.className || ""} "`,
        mid: `${generalSetting?.text}`,
        end: "</button> ",
        done: 1,
    });

    return (
        <button className={configs?.className || ""} style={style}>
            {generalSetting?.text}
        </button>
    );
};

export default ButtonCus;
