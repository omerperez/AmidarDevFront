import React, { useEffect, useState } from "react";
import useWindowSize from "../Hooks/useWindowSize";

const useResponsiveLayout = (minWidth) => {
    const windowSize = useWindowSize();
    const [mediaQuery, setMediaQuery] = useState(windowSize.width > minWidth);

    useEffect(() => {
        setMediaQuery(windowSize.width > minWidth);
    }, [windowSize])

    return mediaQuery;
}

export {
    useResponsiveLayout
}