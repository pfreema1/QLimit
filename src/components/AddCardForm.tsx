import * as React from "react";

interface AddCardFormProps {}

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
  }

  handleTextChange(event: any) {
    let value: string = event.target.value;
    this.setState({
      text: value
    });
  }

  render() {
    return (
      <div className="add-card-form-container">
        <textarea
          className="card-textarea"
          onChange={this.handleTextChange}
          value={this.state.text}
          placeholder="Enter a note"
        >
          {this.state.text}
        </textarea>
      </div>
    );
  }
}

export default AddCardForm;
