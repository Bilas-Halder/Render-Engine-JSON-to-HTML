import {useSelector} from "react-redux";

import React from "react";
import MakeComponent from "./MakeComponent";

const Travel = ({id}) => {
    console.log(id);
    const data = useSelector((state) => state.jsonData.value);
    const node = data[id];
    const childNodes = node?.nodes;

    return (
        <MakeComponent
            key={id}
            payload={{
                id: id,
                componentName: node?.componentName,
                className: node?.settings?.className
                    ? node?.settings?.className
                    : node?.settings?.general?.className,
                style: node?.settings?.style,
                nodes: node?.nodes,
                others: {
                    general: node?.settings?.general,
                    type: node?.type,
                },
            }}
        >
            {childNodes?.length
                ? childNodes.map((id) => <Travel id={id} key={id} />)
                : ""}
        </MakeComponent>
    );
};

export default Travel;
