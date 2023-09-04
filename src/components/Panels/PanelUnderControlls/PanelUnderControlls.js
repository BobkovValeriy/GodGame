import React from "react"

import "./PanelUnderControlls.scss"

function PanelUnderControlls({ children }) {
    return (
        <div className="panel__under-controlls">{children}</div>
    )
};

export default PanelUnderControlls;