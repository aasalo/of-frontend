import React from "react";
import { Form, FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import "../../stylesheets/main.scss";
export default class Header extends React.Component {

  render() {
    return (
        <Form inline>
            <FormGroup>
                <FormControl type="text" placeholder="Search by tag or name" />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.props.onClick}>Search</Button>
        </Form>
    );
  }
}
