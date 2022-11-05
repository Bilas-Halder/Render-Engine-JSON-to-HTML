import React from "react";
import {useConfig, useDynamicStyle, useHtmlSaver} from "../hooks/allHooks";

const Div = () => {
    const configs = useConfig();
    const style = useDynamicStyle({...configs?.style});

    const {mdScreen} = useDynamicStyle({}, 1); // get only screens
    const type = configs?.others?.type;

    const {display, position, ...boxStyle} = style;
    if (position) boxStyle.position = position.replace("!important", "");
    if (display !== "none" && display) {
        boxStyle.display = display;
    }

    const styleForStr =
        type === "Container"
            ? {
                  padding: "2rem 1rem",
              }
            : type === "Box"
            ? boxStyle
            : type === "Row"
            ? {
                  display: mdScreen ? "block" : "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }
            : type === "Column"
            ? {
                  position: "relative",
                  width: mdScreen ? "100%" : "48%",
                  justifySelf: "center",
              }
            : style;

    useHtmlSaver({
        style: styleForStr,
        configs: configs,
        start: `<div class="${configs?.className || ""}" `,
        end: "</div>",
    });

    if (type === "Container") {
        return (
            <div
                className={configs?.className || ""}
                style={{
                    padding: "2rem 1rem",
                }}
            >
                {configs?.children}
            </div>
        );
    } else if (type === "Box") {
        return (
            <div className={configs?.className || ""} style={boxStyle}>
                {configs?.children}
            </div>
        );
    } else if (type === "Row") {
        return (
            <div
                className={configs?.className || ""}
                style={{
                    display: mdScreen ? "block" : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {configs?.children}
            </div>
        );
    } else if (type === "Column") {
        return (
            <div
                className={configs?.className || ""}
                style={{
                    position: "relative",
                    width: mdScreen ? "100%" : "48%",
                    justifySelf: "center",
                }}
            >
                {configs?.children}
            </div>
        );
    }
    return (
        <div className={configs?.className || ""} style={style}>
            {configs?.children}
        </div>
    );
};

export default Div;
