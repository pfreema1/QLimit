import * as React from "react";
import AddCardForm from "./AddCardForm";

interface ProcessHeaderProps {
  title: string;
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
  }

  handleAddCardButtonClick() {
    this.setState(prevState => ({
      showAddCardForm: !prevState.showAddCardForm
    }));
  }

  render() {
    return (
      <div>
        <div className="process-header">
          <div className="process-title-container">
            <span className="header-el-spacing process-title">
              {this.props.title}
            </span>
            <span className="header-el-spacing process-count">5</span>
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
        {this.state.showAddCardForm ? <AddCardForm /> : null}
      </div>
    );
  }
}

export default ProcessHeader;
