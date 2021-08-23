import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import api from '../../api/index'

export default function LayoutTextFields({Token,setFeedItems,feedItems}) {
const [text, setText] = useState('')

async function makepost() {
    console.log(Token)
    const data = {status_text:text}
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `Token ${Token}`}
    const request = await api.post("feed/",data, {headers:headers})
    console.log(request.data);
    return request.data;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={9}>
        <TextField
          id="filled-full-width"
          label="Status"
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          variant="filled"
          onChange={(e)=>{setText(e.target.value)}}
        />
        <Grid container justifyContent="flex-end"><Button variant="contained" onClick={makepost}>post</Button></Grid>
        
      </Grid>
    </Grid>
  );
}
