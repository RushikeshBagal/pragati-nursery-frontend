import React from "react";

import {
    FacebookOutlined,
    Instagram,
    LinkedIn,
    YouTube,
    CallRounded,
    EmailRounded,
    LocationOnRounded,
    MessageRounded
} from '@mui/icons-material';

export const AppIcon = (props) => {
    const Icons = {
        FacebookOutlined: <FacebookOutlined {...props} />,
        Instagram: <Instagram {...props} />,
        LinkedIn: <LinkedIn {...props} />,
        YouTube: <YouTube {...props} />,
        CallRounded: <CallRounded {...props} />,
        EmailRounded: <EmailRounded {...props} />,
        LocationOnRounded: <LocationOnRounded {...props} />,
        MessageRounded: <MessageRounded {...props} />,
    };
    return Icons[props.name]
};