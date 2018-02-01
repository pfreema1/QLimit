import * as React from "react";

interface AddCardFormProps {
  processId: string;
  hideForm(): void;
  handleNewCardAdded(processId: string): void;
}

interface AddCardFormState {
  text: string;
}

class AddCardForm extends React.Component<AddCardFormProps, AddCardFormState> {
  constructor(props: AddCardFormProps) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleAddCardClick = this.handleAddCardClick.bind(this);
  }

  handleTextChange(event: any) {
    let value: string = event.target.value;
    this.setState({
      text: value
    });
  }

  handleCancelClick() {
    this.props.hideForm();
  }

  handleAddCardClick() {
    // tell QLimit component add new card was clicked
    this.props.handleNewCardAdded(this.props.processId);
    // tell ProcessHeader to hide the form
    this.props.hideForm();
  }

  render() {
    return (
      <div className="add-card-form-container">
        <textarea
          className="add-card-textarea"
          onChange={this.handleTextChange}
          value={this.state.text}
          placeholder="Enter a note"
        >
          {this.state.text}
        </textarea>
        <div className="add-card-button-container">
          <button
            onClick={this.handleAddCardClick}
            className="btn add-card-button"
          >
            Add card
          </button>
          <button
            onClick={this.handleCancelClick}
            className="btn cancel-button"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

export default AddCardForm;
