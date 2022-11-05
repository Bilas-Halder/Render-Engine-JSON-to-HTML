import "./App.css";
import {useDispatch} from "react-redux";
import Data from "./data/data_sample.json";
import {useEffect} from "react";
import {changeJsonData} from "./redux/reducers/jsonData";
import Travel from "./functions/Travel";
import DownloadHtml from "./functions/DownloadHtml";
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeJsonData(Data.data));
    }, []);

    return (
        <div>
            <DownloadHtml id={Data.rootNodeId} />
            <Travel id={Data.rootNodeId} />
        </div>
    );
}

export default App;
