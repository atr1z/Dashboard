function getBrowserInfo() {
    const userAgent = navigator.userAgent;
    
    let name, version, majorVersion, osName, osVersion;

    if (userAgent.indexOf("Chrome") !== -1) {
        name = "Chrome";
        version = userAgent.substring(userAgent.indexOf("Chrome") + 7);
    } else if (userAgent.indexOf("Safari") !== -1) {
        name = "Safari";
        version = userAgent.substring(userAgent.indexOf("Safari") + 7);
        if (userAgent.indexOf("Version") !== -1) {
            version = userAgent.substring(userAgent.indexOf("Version") + 8);
        }
    } else if (userAgent.indexOf("Firefox") !== -1) {
        name = "Firefox";
        version = userAgent.substring(userAgent.indexOf("Firefox") + 8);
    } else if (userAgent.indexOf("MSIE") !== -1) {
        name = "Microsoft Internet Explorer";
        version = userAgent.substring(userAgent.indexOf("MSIE") + 5);
    } else if (userAgent.indexOf("Trident") !== -1) {
        name = "Microsoft Internet Explorer";
        version = userAgent.substring(userAgent.indexOf("rv:") + 3);
    } else {
        name = "Unknown";
        version = "Unknown";
    }

    majorVersion = parseInt(version, 10);

    if (userAgent.indexOf("Windows NT") !== -1) {
        osName = "Windows";
        osVersion = userAgent.substring(userAgent.indexOf("Windows NT") + 11, userAgent.indexOf("Windows NT") + 14);
    } else if (userAgent.indexOf("Mac OS X") !== -1) {
        osName = "Mac OS";
        osVersion = userAgent.substring(userAgent.indexOf("Mac OS X") + 9, userAgent.indexOf("Mac OS X") + 14);
    } else if (userAgent.indexOf("Linux") !== -1) {
        osName = "Linux";
        osVersion = "Unknown";
    } else {
        osName = "Unknown";
        osVersion = "Unknown";
    }

    return {
        name,
        version,
        majorVersion,
        osName,
        osVersion
    };
}

export default getBrowserInfo;