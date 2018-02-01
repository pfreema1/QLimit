import * as React from "react";
import Process from "./Process";

interface QLimitProps {}

interface QLimitState {}

class QLimit extends React.Component<QLimitProps, QLimitState> {
  constructor(props: QLimitProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="q-limit-board-container">
        <Process title="to do" />
      </div>
    );
  }
}

export default QLimit;
