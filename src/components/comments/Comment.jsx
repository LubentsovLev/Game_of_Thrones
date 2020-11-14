import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";
import { sendComments } from "../../redux/comment-reducer";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const CommentForm = (props) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  return (
    <>
      <form className="comForm" onSubmit={props.handleSubmit}>
        <Field
          component="input"
          type="text"
          className="inputCome"
          name="title"
          placeholder="title"
        ></Field>
        <Field
          component="input"
          type="text"
          className="inputCome"
          name="userId"
          placeholder="name"
        ></Field>
        <Field
          component="textarea"
          type="text"
          className="inputCome"
          name="body"
          placeholder="letter"
        ></Field>
        {/* <Button variant="outlined" color="primary"></Button> */}
        <button className="inputCome"> send</button>
        <div>
          {Object.entries(props.resp).length === 0 ? (
            ""
          ) : (
            <div>
              <div>
                <b>Sent data :</b>
              </div>
              <div> title: {props.resp.title}</div>
              <div> name: {props.resp.userId}</div>
              <div> letter : {props.resp.body}</div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
const CommentsReduxForm = reduxForm({
  form: "Comment",
})(CommentForm);

const Comment = (props) => {
  const submit = (values) => {
    props.sendComments(values);
  };
  useEffect(() => {
    // console.log(props.resp);
  }, [props.resp]);
  return (
    <div>
      <CommentsReduxForm resp={props.resp} onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    resp: state.comments.Comment,
  };
};
export default compose(connect(mapStateToProps, { sendComments }))(Comment);
