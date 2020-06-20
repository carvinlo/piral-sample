import * as React from "react";
import { render } from "react-dom";
import { Redirect } from "react-router-dom";
import { createInstance, Piral, SetRoute } from "piral-core";
import { RootPilet } from "./Pilet";
import { createStore } from "redux";

const instance = createInstance({
  availablePilets: [RootPilet],
  extendApi: [],
  requestPilets() {
    return new Promise((resolve) => setTimeout(() => resolve([]), 1000));
  },
});

console.log(createStore);

const app = (
  <Piral instance={instance}>
    <SetRoute path="/" component={() => <Redirect from="/" to="/home" />} />
  </Piral>
);
render(app, document.querySelector("#app"));
