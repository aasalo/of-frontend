import React from  "react";
import {ProgressBar, Grid, Row, Col, Thumbnail, Button, Label} from "react-bootstrap";
import Meme from "./Meme";

export default class MemeList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const memes = 
        [{
            "bytes": 156882,
            "format": "jpg",
            "resource_type": "image",
            "width": 1000,
            "secure_url": "https://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "created_at": "2018-11-17T06:29:46Z",
            "type": "upload",
            "version": 1542436186,
            "url": "http://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "public_id": "memes/nkcfbpo6wggptd9nwxnt",
            "height": 972
          },
          {
            "bytes": 156882,
            "format": "jpg",
            "resource_type": "image",
            "width": 1000,
            "secure_url": "https://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "created_at": "2018-11-17T06:29:46Z",
            "type": "upload",
            "version": 1542436186,
            "url": "http://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "public_id": "memes/nkcfbpo6wggptd9nwxnv",
            "height": 972
          },
          {
            "bytes": 156882,
            "format": "jpg",
            "resource_type": "image",
            "width": 1000,
            "secure_url": "https://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "created_at": "2018-11-17T06:29:46Z",
            "type": "upload",
            "version": 1542436186,
            "url": "http://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436186/memes/nkcfbpo6wggptd9nwxns.jpg",
            "public_id": "memes/nkcfbpo6wggptd9nwxns",
            "height": 972
          },
          {
            "bytes": 156882,
            "format": "jpg",
            "resource_type": "image",
            "width": 1000,
            "secure_url": "https://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436169/memes/sbnzr89ht1njseczbkav.jpg",
            "created_at": "2018-11-17T06:29:29Z",
            "type": "upload",
            "version": 1542436169,
            "url": "http://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436169/memes/sbnzr89ht1njseczbkav.jpg",
            "public_id": "memes/sbnzr89ht1njseczbkav",
            "height": 972
          },
          {
            "bytes": 156882,
            "format": "jpg",
            "resource_type": "image",
            "width": 1000,
            "secure_url": "https://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436169/memes/sbnzr89ht1njseczbkav.jpg",
            "created_at": "2018-11-17T06:29:29Z",
            "type": "upload",
            "version": 1542436169,
            "url": "http://res.cloudinary.com/hzrqgt9nc/image/upload/v1542436169/memes/sbnzr89ht1njseczbkav.jpg",
            "public_id": "memes/sbnzr89ht1njseczbkaf",
            "height": 972
          }];

        if (!memes.length) {
          return (
            <ProgressBar active now={100} label="Please wait while the service is starting.."/>
          );
        }

        return (
            <Grid>
                <Row>
                    {memes.map((meme) => {
                        return (<Meme meme={meme} key={meme.public_id} />);
                     })}
                </Row>
            </Grid>
        );
    }

}