import * as React from "react";
import ProcessHeader from "./ProcessHeader";

interface ProcessProps {
  title: string;
}

interface ProcessState {}

class Process extends React.Component<ProcessProps, ProcessState> {
  constructor(props: ProcessProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="process-container">
        <ProcessHeader title={this.props.title} />
      </div>
    );
  }
}

export default Process;
