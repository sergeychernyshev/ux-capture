import React from "react";
import UXCaptureImageLoad from "@ux-capture/react-ux-capture/lib/UXCaptureImageLoad";

import logo from "../ux-capture-logo-up.svg";

import { LOGO_ONLOAD } from "../ux-capture-zones";

export default () => {
	return <UXCaptureImageLoad mark={LOGO_ONLOAD} src={logo} alt="logo" height="50px" />;
};
