import * as React from "react";
import ProcessHeader from "./ProcessHeader";

interface ProcessProps {
  processId: string;
  title: string;
  numCards: number;
  handleNewCardAdded(processId: string): void;
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
        <ProcessHeader {...this.props} />
      </div>
    );
  }
}

export default Process;
