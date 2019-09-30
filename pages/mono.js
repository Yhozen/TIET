import React from "react";
import Head from "next/head";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, SplitLetters, SplitWords } from "react-gsap";

import SkewedText from "../components/skewedTextMagic";
import Section from "../components/section";

export default () => (
  <div>
    <Head>
      <title>Home</title>
      <link
        href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <div id="background" />
    <Controller>
      <Scene duration={600} pin={true}>
        <h1>50% de los plásticos tienen un solo uso</h1>
      </Scene>
      <Scene duration={600} pin={true}>
        <h1>91% de los plásticos no se reciclan</h1>
      </Scene>
      <Scene duration={600} pin={true}>
        <h1>Tú puedes frenar esto</h1>
      </Scene>
    </Controller>

    <Section></Section>
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
        background-color: #111;
      }
      #background {
        background-image: url("https://suitcaseandumbrella.files.wordpress.com/2013/02/p1014874.jpg?w=2000");
        background-size: cover;
        position: fixed;
        display: block;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
      }
      .textContainer {
        position: relative;
        display: inline-block;
        transform-origin: center;
      }
    `}</style>
  </div>
);
