import React from "react";
import { Col, Thumbnail, Label, Button } from "react-bootstrap";

export default class Meme extends React.Component {

  render() {

    const meme = this.props.meme;

    return (
      <Col xs={6} md={4}>
      <Thumbnail src={meme.secure_url} alt="242x200" responsive>
          <h4>{meme.public_id}</h4>
          <p>
              <Label>gorilla</Label>
              <Label>ege</Label>
          </p>
          <p>
          <Button bsStyle="primary">Button</Button>
          &nbsp;
          <Button bsStyle="default">Button</Button>
          </p>
      </Thumbnail>
      </Col>
    );
  }
}
