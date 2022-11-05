import React from "react";
import {useConfig, useDynamicStyle, useHtmlSaver} from "../hooks/allHooks";

const H1 = () => {
    const configs = useConfig();
    const style = useDynamicStyle({...configs?.style});
    const headingType = configs?.others?.general?.headingType;
    const text = configs?.others?.general?.text;

    useHtmlSaver({
        style: style,
        configs: configs,
        start: `<${headingType} class="${configs?.className || ""} "`,
        mid: `${text}`,
        end: `</${headingType}> `,
        done: 1,
    });

    switch (headingType) {
        case "h1":
            return (
                <h1 className={configs?.className || ""} style={style}>
                    {text}
                </h1>
            );
        case "h2":
            return (
                <h2 className={configs?.className || ""} style={style}>
                    {text}
                </h2>
            );
        case "h3":
            return (
                <h3 className={configs?.className || ""} style={style}>
                    {text}
                </h3>
            );
        case "h4":
            return (
                <h4 className={configs?.className || ""} style={style}>
                    {text}
                </h4>
            );
        case "h5":
            return (
                <h5 className={configs?.className || ""} style={style}>
                    {text}
                </h5>
            );
        case "h6":
            return (
                <h6 className={configs?.className || ""} style={style}>
                    {text}
                </h6>
            );

        default:
            break;
    }
};
export default H1;
