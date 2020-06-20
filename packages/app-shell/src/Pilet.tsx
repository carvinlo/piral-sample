import * as React from "react";
import { Pilet, ErrorInfoProps } from "piral-core";
const prerequest = () =>
  fetch("/somedata", { responseType: "text", ignoreInterceptor: true }).then(
    (res) => {
      // return import('./setstore').then(m => m.default(res));
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({});
        }, 1000);
      });
    }
  );

/**
 * Shows the general usage of the `setup` function together
 * with some tile and page registrations.
 * Also registeres some custom error page handlers. For details
 * on this, see DashboardModule.
 */
export const RootPilet: Pilet = {
  content: "",
  name: "root",
  version: "0.0.1",
  hash: "root",
  setup(piral) {
    piral.registerPage("/home", (props) => {
      return <div>Home</div>;
    });
  },
};
