import whyDidYouRender from "@welldone-software/why-did-you-render";
import * as React from "react";

if (import.meta.env.DEV) {
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    collapseGroups: true,
    titleColor: "#adc6ff",
    diffNameColor: "#597ef7",
    diffPathColor: "#ff4d4f",
  });
}
