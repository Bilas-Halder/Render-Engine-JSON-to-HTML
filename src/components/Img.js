import React from "react";
import {useConfig, useDynamicStyle, useHtmlSaver} from "../hooks/allHooks";

const Img = () => {
    const configs = useConfig();
    const style = useDynamicStyle({...configs?.style});
    const generalSetting = {...configs?.others?.general};

    useHtmlSaver({
        style: {
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            ...style,
        },
        configs: configs,
        start: `<div class="img-container"> 
        <img class="${configs?.className || ""} " alt="Images"
        src="${generalSetting?.img?.src} "`,
        mid: ``,
        end: `</div>`,
        done: 1,
    });

    return (
        <div className="img-container" style={style}>
            <img
                className={configs?.className || ""}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                    ...style,
                }}
                alt="Images"
                src={generalSetting?.img?.src}
            />
        </div>
    );
};

export default Img;
