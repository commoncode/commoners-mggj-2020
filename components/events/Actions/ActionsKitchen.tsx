import { useEffect, useState } from "react";

import ActionEvent from "./ActionEvent";
import Cookie from "../Cookie/Cookie";
import Flower from "../Flower/Flower";
import Wrench from "../Wrench/Wrench";

// captions for Kitchen scene
import CoffeeCaption from "../../captions/texts/kitchen/CoffeeCaption";
import CookieCaption from "../../captions/texts/kitchen/CookieCaption";
import CrumbCaption from "../../captions/texts/kitchen/CrumbCaption";
import GrabCookieCaption from "../../captions/texts/kitchen/GrabCookieCaption";
import FlowerCaption from "../../captions/texts/kitchen/FlowerCaption";
import GrabFlowerCaption from "../../captions/texts/kitchen/GrabFlowerCaption";
import LeakingCaption from "../../captions/texts/kitchen/LeakingCaption";
import WrenchCaption from "../../captions/texts/kitchen/WrenchCaption";
import GrabWrenchCaption from "../../captions/texts/kitchen/GrabWrenchCaption";
import PutItemBackCaption from "../../captions/texts/PutItemBackCaption";

const ActionsKitchen = ({
  language,
  increaseLovePoints,
  decreaseLovePoints,
  setHasCookie,
  setHasFlower,
  setHasWrench
}) => {
  // Kitchen captions states
  const [showCoffeeCaption, setShowCoffeeCaption] = useState(false);
  const [showCookieCaption, setShowCookieCaption] = useState(false);
  const [showCrumbCaption, setShowCrumbCaption] = useState(false);
  const [showGrabCookieCaption, setShowGrabCookieCaption] = useState(false);
  const [showFlowerCaption, setShowFlowerCaption] = useState(false);
  const [showGrabFlowerCaption, setShowGrabFlowerCaption] = useState(false);
  const [showWrenchCaption, setShowWrenchCaption] = useState(false);
  const [showGrabWrenchCaption, setShowGrabWrenchCaption] = useState(false);
  const [showPutItemBackCaption, setShowPutItemBackCaption] = useState(false);

  return (
    <>
      <CoffeeCaption
        x={160}
        y={220}
        language={language}
        isToggled={showCoffeeCaption}
      />

      {/* Cookie captions */}
      <CookieCaption
        x={120}
        y={280}
        language={language}
        isToggled={showCookieCaption}
      />
      <CrumbCaption
        x={30}
        y={180}
        language={language}
        isToggled={showCrumbCaption}
      />
      <GrabCookieCaption
        x={50}
        y={250}
        language={language}
        isToggled={showGrabCookieCaption}
      />

      {/* Flower captions */}
      <FlowerCaption
        x={220}
        y={90}
        language={language}
        isToggled={showFlowerCaption}
      />
      <GrabFlowerCaption
        x={300}
        y={100}
        language={language}
        isToggled={showGrabFlowerCaption}
      />

      {/* Wrench captions */}
      <WrenchCaption
        x={640}
        y={100}
        language={language}
        isToggled={showWrenchCaption}
      />
      <GrabWrenchCaption
        x={620}
        y={100}
        language={language}
        isToggled={showGrabWrenchCaption}
      />
      <PutItemBackCaption
        x={624}
        y={100}
        language={language}
        isToggled={showPutItemBackCaption}
      />

      <ActionEvent
        x={280}
        y={320}
        style={{
          width: "2rem",
          height: "2rem",
          background: "transparent"
        }}
        activation={() => {
          setShowCoffeeCaption(true);
          setTimeout(() => {
            setShowCoffeeCaption(false);
          }, 2000);
        }}
      />

      <Cookie
        x={350}
        y={320}
        activation={() => {
          setShowCookieCaption(true);
          setTimeout(() => {
            setShowCookieCaption(false);
          }, 2000);
        }}
        eat={() => {
          setShowCrumbCaption(true);
          setTimeout(() => {
            setShowCrumbCaption(false);
          }, 3000);
          decreaseLovePoints();
        }}
        grab={() => {
          setShowGrabCookieCaption(true);
          setTimeout(() => {
            setShowGrabCookieCaption(false);
            setHasCookie(true);
          }, 3000);
        }}
      />

      <Flower
        x={500}
        y={130}
        style={{
          width: "5rem",
          height: "6rem"
        }}
        activation={() => {
          setShowFlowerCaption(true);
          setTimeout(() => {
            setShowFlowerCaption(false);
          }, 3000);
        }}
        grab={() => {
          setShowGrabFlowerCaption(true);
          setTimeout(() => {
            setShowGrabFlowerCaption(false);
            setHasFlower(true);
          }, 3000);
        }}
        put={() => {
          setShowPutItemBackCaption(true);
          setTimeout(() => {
            setShowPutItemBackCaption(false);
            setHasFlower(false);
          }, 3000);
        }}
      />

      <Wrench
        x={625}
        y={255}
        activation={() => {
          setShowWrenchCaption(true);
          setTimeout(() => {
            setShowWrenchCaption(false);
          }, 3000);
        }}
        grab={() => {
          setShowGrabWrenchCaption(true);
          setTimeout(() => {
            setShowGrabWrenchCaption(false);
          }, 3000);
          setHasWrench(true);
        }}
        put={() => {
          setShowPutItemBackCaption(true);
          setTimeout(() => {
            setShowPutItemBackCaption(false);
          }, 3000);
          setHasWrench(false);
        }}
      />
    </>
  );
};

export default ActionsKitchen;
