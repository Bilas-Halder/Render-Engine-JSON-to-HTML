import React from "react";
import {useSelector} from "react-redux";
import Data from "../data/data_sample.json";

const DownloadHtml = ({id}) => {
    const data = useSelector((state) => state.htmlData.value);

    let string = "";
    let newString = "";

    const addStrings = (id) => {
        if (data[id]?.done === 1) {
            newString =
                string + data[id]?.start + data[id]?.mid + data[id]?.end;
            console.log("New string - >>>> >>> ", newString);
            string = newString;
            return;
        } else {
            string = string + data[id]?.start;
            data[id]?.nodes?.forEach((id) => {
                console.log("id -> ", id);
                addStrings(id);
            });
            string = string + data[id]?.end;
        }
    };

    const download = (data, filename, type) => {
        const blob = new Blob([data], {type: type});
        const url = URL.createObjectURL(blob);
        const link = document.getElementById("a-tag");
        link.download = filename;
        link.href = url;
        link.click();
    };

    const handleDownloadHTML = () => {
        addStrings(id);

        const saveAble = `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>HTML Output From JSON Data</title>
        
                <script
                    src="https://kit.fontawesome.com/8c56c086b2.js"
                    crossorigin="anonymous"
                ></script>
            </head>
            <body>
            ${string}
            </body>
        </html>`;

        download(saveAble, "HTML Output.html", "text/html");
    };

    const handleDownloadJSON = () => {
        download(JSON.stringify(Data), "Sample JSON Data.json", "text/plain");
    };

    const style = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "170px",
        height: "50px",
        borderRadius: "4px",
        background: "rgb(24, 48, 64)",
        color: " rgb(246, 186, 56)",
        fontWeight: "500",
        fontSize: "19px",
        marginRight: "20px",
        margin: "1rem",
    };

    return (
        <>
            <a href=" " id="a-tag" style={{display: "none"}}>
                asd
            </a>
            <div style={{display: "flex"}}>
                <button class style={style} onClick={handleDownloadHTML}>
                    Download HTML
                </button>

                <button
                    class
                    style={{
                        ...style,
                        transform: "translateX(110%)",
                        background: "#FCFCFC",
                        color: "rgb(246, 186, 56)",
                    }}
                    onClick={handleDownloadJSON}
                >
                    Download JSON
                </button>
            </div>
        </>
    );
};

export default DownloadHtml;
