import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeCurrentNode} from "../redux/reducers/htmlData";

export const useDynamicStyle = (styles, returnScreens) => {
    const [smallScreen, setSmallScreen] = useState(
        window.matchMedia("(max-width: 576px)").matches
    );
    const [mdScreen, setMDScreen] = useState(
        window.matchMedia("(max-width: 992px)").matches
    );
    useEffect(() => {
        window
            .matchMedia("(max-width: 576px)")
            .addEventListener("change", (e) => setSmallScreen(e.matches));
        window
            .matchMedia("(max-width: 992px)")
            .addEventListener("change", (e) => setMDScreen(e.matches));
    }, []);

    const style = smallScreen
        ? {...styles?.mobile}
        : mdScreen
        ? {...styles?.tablet}
        : {...styles?.desktop};
    if (returnScreens === 1) {
        return {smallScreen, mdScreen};
    }
    return style;
};

export const useConfig = () => {
    const data = useSelector((state) => state.componentConfig.value);
    const [configs, setConfigs] = useState({});
    useEffect(() => {
        setConfigs({...data});
    }, []);

    return configs;
};

export const useHtmlSaver = ({
    style,
    configs,
    start,
    mid = "",
    end,
    done = 0,
}) => {
    const dispatch = useDispatch();
    let styleStr = JSON.stringify(style);

    styleStr = styleStr.replace("}", "");
    styleStr = styleStr.replace("{", "");
    styleStr = styleStr.replaceAll('"', "");
    styleStr = styleStr.replaceAll(",", ";");
    styleStr = styleStr
        .replace(/(?:^|\.?)([A-Z])/g, function (x, y) {
            return "-" + y.toLowerCase();
        })
        .replace(/^-/, "");

    const htmlInfo = {
        id: configs?.id,
        nodes: configs?.nodes?.map((v) => v),
        start: start + ` style="${styleStr}" >`,
        mid: mid,
        end: end,
        done: done,
    };

    dispatch(changeCurrentNode(htmlInfo));
};
