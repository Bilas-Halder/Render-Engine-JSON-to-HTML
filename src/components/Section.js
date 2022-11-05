import React from "react";
import {useConfig, useDynamicStyle, useHtmlSaver} from "../hooks/allHooks";

const Section = () => {
    const configs = useConfig();
    const style = useDynamicStyle({...configs?.style});

    const {overflowX, overflowY, ...restStyle} = style;

    useHtmlSaver({
        style: restStyle,
        configs: configs,
        start: `<section class="${configs?.className || ""}"`,
        end: "</section>",
    });

    return (
        <section className={configs?.className || ""} style={{...restStyle}}>
            {configs?.children}
        </section>
    );
};
export default Section;
