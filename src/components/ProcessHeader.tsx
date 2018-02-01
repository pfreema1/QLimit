import * as React from "react";
import AddCardForm from "./AddCardForm";

interface ProcessHeaderProps {
  processId: string;
  title: string;
  numCards: number;
  handleNewCardAdded(
    processId: string,
    cardText: string,
    addedBy: string
  ): void;
}

interface ProcessHeaderState {
  showAddCardForm: boolean;
}

class ProcessHeader extends React.Component<
  ProcessHeaderProps,
  ProcessHeaderState
> {
  constructor(props: ProcessHeaderProps) {
    super(props);

    this.state = {
      showAddCardForm: false
    };

    this.handleAddCardButtonClick = this.handleAddCardButtonClick.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  handleAddCardButtonClick() {
    this.setState(prevState => ({
      showAddCardForm: !prevState.showAddCardForm
    }));
  }

  hideForm() {
    this.setState(prevState => ({
      showAddCardForm: !prevState.showAddCardForm
    }));
  }

  render() {
    return (
      <div className="process-header-container">
        <div className="process-header">
          <div className="process-title-container">
            <span className="header-el-spacing process-title">
              {this.props.title}
            </span>
            <span className="header-el-spacing process-count">
              {this.props.numCards}
            </span>
          </div>
          <div className="process-options-container">
            <span
              className="header-el-spacing process-add-card-button"
              onClick={this.handleAddCardButtonClick}
            >
              +
            </span>
            <span className="header-el-spacing process-options-button">
              ...
            </span>
          </div>
        </div>
        {this.state.showAddCardForm ? (
          <AddCardForm
            hideForm={this.hideForm}
            handleNewCardAdded={this.props.handleNewCardAdded}
            processId={this.props.processId}
          />
        ) : null}
      </div>
    );
  }
}

export default ProcessHeader;
