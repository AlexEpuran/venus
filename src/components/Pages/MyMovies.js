import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import AddMovie from "./AddMovieFunctionality"


export default function MyMovies() {
  return (
    <>
      <WelcomeBanner />
      <h1 className="mymovies">MY MOVIES</h1>
      <AddMovie/>
    </>
  );
}
