import React, { useEffect } from "react";
import Head from "next/head";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import SkewedText from "../components/skewedTextMagic";
import Button from "../components/button";
import Logo from "../components/logo";
import FloatingIcon from "../components/floatingIcon";
import EmailInput from "../components/emailInput";

import particlesJson from "../util/particles.json";

export default () => {
  useEffect(() => {
    import("particles.js").then(module => {
      const particlesJS = window.particlesJS;
      particlesJS("particles-js", particlesJson);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div id="particles-js"></div>

      <Controller>
        <Scene duration={600} pin={true}>
          <SkewedText>50% de los plásticos tienen un solo uso</SkewedText>
        </Scene>
        <Scene duration={600} pin={true}>
          <SkewedText>91% de los plásticos no se reciclan</SkewedText>
        </Scene>
        <Scene duration={600} pin={true}>
          <SkewedText>Tú puedes frenar esto</SkewedText>
        </Scene>
        <Scene duration={600} offset={300} pin={true}>
          <div id="svg-container">
            <Logo />
            <h1>NOMBREDELAWEA</h1>
          </div>
        </Scene>
        <Scene triggerHook="onLeave" duration="300%" pin>
          <Timeline wrapper={<div id="pinContainer" />}>
            <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
              <section className="panel turqoise">
                <EmailInput label="hola" />
              </section>
            </Tween>
          </Timeline>
        </Scene>
      </Controller>
      <FloatingIcon />
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: Avenir Next, -apple-system, BlinkMacSystemFont, Avenir,
            Helvetica, sans-serif;
          background-color: #2980b9;
          scroll-behavior: smooth;
        }
        h1 {
          font: 2em/1 Impact, "Raleway", sans-serif;
          text-align: center;
          color: white;
          letter-spacing: 3px;
          text-shadow: 1px 2px 0 #666, 2px 3px 0 #888;
        }
        #svg-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        #particles-js {
          position: fixed;
          display: block;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 0;
        }

        #pinContainer {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
        #pinContainer .panel {
          height: 100vh;
          width: 100vw;
          position: absolute;
          text-align: center;
        }
        .panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .panel.blue {
          background-color: #3883d8;
        }

        .panel.turqoise {
          background-color: #f5f6fa;
        }

        .panel.green {
          background-color: #22d659;
          margin-bottom: 800px;
        }

        .panel.bordeaux {
          background-color: #953543;
        }
      `}</style>
    </>
  );
};
