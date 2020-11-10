import React from "react";
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
        ></Field>
        <Field
          component="textarea"
          type="text"
          className="inputCome"
          name="body"
        ></Field>
        <Field
          component="input"
          type="text"
          className="inputCome"
          name="userId"
        ></Field>
        {/* <Button variant="outlined" color="primary"></Button> */}
        <button className="inputCome"> send</button>
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
  return (
    <div>
      <CommentsReduxForm onSubmit={submit} />
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default compose(connect(mapStateToProps, { sendComments }))(Comment);
