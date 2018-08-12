import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import moment from "moment";

import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: 'mobile' */ "./mobile/main.js"),
  loading() {
    return <h2>加载中。。。</h2>;
  }
});

class App extends React.Component {
  render() {
    //console.log(moment);
    return (
      <div>
        Anmmpp.....
        <LoadableComponent />
      </div>
    );
  }
}

export default App;
