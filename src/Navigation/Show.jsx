import React from "react";

import "./Show.css";

function Show(props) {
    const [hash, setHash] = React.useState(window.location.hash);

    React.useEffect(function () {
        window.addEventListener("hashchange", () => setHash(window.location.hash));
    }, []);

    return <div className={hash === props.hash ? "" : "hidden"}>{props.children}</div>;
}

export default Show;
