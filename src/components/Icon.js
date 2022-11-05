import React from "react";
import {useConfig, useDynamicStyle, useHtmlSaver} from "../hooks/allHooks";

const Icon = () => {
    const configs = useConfig();
    const style = useDynamicStyle({...configs?.style});

    useHtmlSaver({
        style: style,
        configs: configs,
        start: `<i class="${configs?.className || ""} ${
            configs?.others?.general?.icon?.type
        } "`,
        mid: `${configs?.children}`,
        end: "</i>",
        done: 1,
    });

    return (
        <i
            className={`${configs?.className || ""} ${
                configs?.others?.general?.icon?.type
            }`}
            style={style}
        >
            {configs?.children}
        </i>
    );
};

export default Icon;
