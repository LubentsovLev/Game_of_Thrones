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
            <div key={i + i.aliases[0]} className={s.container}>
              <div className={s.card}>
                <div className={s.border}></div>
                <div className={s.avatar}>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/199526/jonsnow.jpg"
                    alt=""
                  />
                </div>
                <div className={s.stats}>
                  <h2>{i.aliases[0]}</h2>
                  <div>
                    <p>gender:{i.gender}</p>
                    <p>culture:{i.culture}</p>
                    {i.name ? <p>Location: {i.name}</p> : null}

                    <blockquote>
                      “The only time a man can be brave is when he is afraid.”
                    </blockquote>
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
        }}
      >
        Next page
      </Button>
    </>
  );
};

export default GameOfThrones;
