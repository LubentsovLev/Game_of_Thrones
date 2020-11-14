import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Loader from "../helpers/Loader";
import GameOfThrones from "./GameOfThrones";
import {
  GetCharacters,
  setCurrentPage,
} from "../../redux/GameOfThrones-reducer";
import Paginator from "../Paginator/Paginator";
import { Button } from "@material-ui/core";

class GameOfThronesContainer extends React.PureComponent {
  componentDidMount() {
    if (this.props.characters.length === 0) {
      this.props.GetCharacters(this.props.currentPage, this.props.pageSize);
    } else {
    }
  }
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <>
        <div className={this.props.isFetching ? "noPg" : "isPg"}>
          <Paginator
            // currentPage={currentPage}
            // onPageChanged={onPageChanged}
            // totalItemsCount={totalItemsCount}
            // pageSize={pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.props.GetCharacters}
            totalItemsCount={this.props.totalItemsCount}
            pageSize={this.props.pageSize}
            buttonPage = {6}
          />
        </div>
        {this.props.isFetching ? (
          <Loader />
        ) : (
          <GameOfThrones
            characters={this.props.characters}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            GetCharacters={this.props.GetCharacters}
            isFetching={this.props.isFetching}
          />
        )}
      </>
    );
  }
}

/* let mapSateToProps = (state) => {
    return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalItemsCount : state.usersPage.totalItemsCount ,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
    };
  };
  */
let mapSateToProps = (state) => {
  return {
    characters: state.GT.characters,
    currentPage: state.GT.currentPage,
    isFetching: state.GT.isFetching,
    pageSize: state.GT.pageSize,
    totalItemsCount: state.GT.totalItemsCount,
  };
};

export default compose(
  connect(mapSateToProps, { GetCharacters, setCurrentPage })
)(GameOfThronesContainer);
