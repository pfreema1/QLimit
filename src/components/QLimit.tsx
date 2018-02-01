import * as React from "react";
import Process from "./Process";

interface QLimitProps {}

interface QLimitState {
  process1Attr: ProcessObject;
  process2Attr: ProcessObject;
  process3Attr: ProcessObject;
}

interface ProcessObject {
  title: string;
  numCards: number;
}

class QLimit extends React.Component<QLimitProps, QLimitState> {
  constructor(props: QLimitProps) {
    super(props);

    this.state = {
      process1Attr: {
        title: "to do",
        numCards: 0
      },
      process2Attr: {
        title: "in progress",
        numCards: 0
      },
      process3Attr: {
        title: "done",
        numCards: 0
      }
    };

    this.handleNewCardAdded = this.handleNewCardAdded.bind(this);
  }

  handleNewCardAdded(processId: string) {
    console.log("processId from QLimit:  ", processId);
    // increase numCards
    this.setState(prevState => ({
      ...this.state,
      [processId + "Attr"]: {
        ...this.state[processId + "Attr"],
        numCards: prevState[processId + "Attr"].numCards + 1
      }
    }));
  }

  render() {
    return (
      <div className="q-limit-board-container">
        <Process
          processId="process1"
          title="to do"
          numCards={this.state.process1Attr.numCards}
          handleNewCardAdded={this.handleNewCardAdded}
        />
      </div>
    );
  }
}

export default QLimit;
