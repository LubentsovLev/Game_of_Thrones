import { Button, Link } from "@material-ui/core";
import React from "react";
import s from "./users.module.css";

let GameOfThrones = (props) => {
  return (
    <>
      <div className={s.GTContainer}>
        {/* {
        0:
        aliases: ["The Poetess"]
        allegiances: []
        books: ["https://www.anapioficeandfire.com/api/books/5"]
        born: ""
        culture: "Braavosi"
        died: ""
        father: ""
        gender: "Female"
        mother: ""
        name: ""
        playedBy: [""]
        povBooks: []
        spouse: ""
        titles: [""]
        tvSeries: [""]
        url: "https://www.anapioficeandfire.co
      } */}
        {props.characters.map((i) => {
          return (
            <div
              key={i.gender + i.culture + i.name + i.aliases[0]}
              className={s.container}
            >
              <div className={s.card}>
                <div className={s.border}>{}</div>
                <div className={s.avatar}>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/199526/jonsnow.jpg"
                    alt=""
                  />
                </div>
                <div className={s.stats}>
                  <h2> {i.name ? i.name : i.aliases[0]}</h2>
                  <div>
                    <p>
                      <b>gender:</b>
                      {i.gender}
                    </p>
                    <p>
                      {i.culture ? (
                        <p>
                          <b>culture:</b> {i.culture}
                        </p>
                      ) : null}
                    </p>
                    {i.born ? (
                      <p>
                        <b>born:</b> {i.born}
                      </p>
                    ) : null}
                    {i.died ? (
                      <p>
                        <b>died:</b> {i.died}
                      </p>
                    ) : null}

                    {/* <blockquote>
                      “The only time a man can be brave is when he is afraid.”
                    </blockquote> */}
                    {/* <Link component="button" variant="body2" href={i.url}>
                      <a href={i.url}>More info</a>
                    </Link> */}
                    <Link href={i.url} variant="body2">
                      More info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.GetCharacters(props.currentPage + 1, props.pageSize);
          console.log(props.characters);
        }}
      >
        Next page
      </Button>
    </>
  );
};

export default GameOfThrones;
