import { useEffect, useState } from "react";

import ActionEvent from "./ActionEvent";
import Cookie from "../Cookie/Cookie";
import Flower from "../Flower/Flower";

// captions for Kitchen scene
import CoffeeCaption from "../../captions/texts/kitchen/CoffeeCaption";
import CookieCaption from "../../captions/texts/kitchen/CookieCaption";
import CrumbCaption from "../../captions/texts/kitchen/CrumbCaption";
import GrabCookieCaption from "../../captions/texts/kitchen/GrabCookieCaption";
import FlowerCaption from "../../captions/texts/kitchen/FlowerCaption";
import GrabFlowerCaption from "../../captions/texts/kitchen/GrabFlowerCaption";
import LeakingCaption from "../../captions/texts/kitchen/LeakingCaption";
import WrenchCaption from "../../captions/texts/kitchen/WrenchCaption";

const ActionsKitchen = ({ language }) => {

  // Kitchen captions states
  const [showCoffeeCaption, setShowCoffeeCaption] = useState(false);
  const [showCookieCaption, setShowCookieCaption] = useState(false);
  const [showCrumbCaption, setShowCrumbCaption] = useState(false);
  const [showGrabCookieCaption, setShowGrabCookieCaption] = useState(false);
  const [showFlowerCaption, setShowFlowerCaption] = useState(false);
  const [showGrabFlowerCaption, setShowGrabFlowerCaption] = useState(false);

  return (
    <>
      <CoffeeCaption x={200} y={280} language={language} isToggled={showCoffeeCaption} />
      <CookieCaption x={120} y={280} language={language} isToggled={showCookieCaption} />
      <CrumbCaption x={30} y={180} language={language} isToggled={showCrumbCaption} />
      <GrabCookieCaption x={50} y={250} language={language} isToggled={showGrabCookieCaption} />
      <FlowerCaption x={300} y={100} language={language} isToggled={showFlowerCaption} />
      <GrabFlowerCaption x={300} y={100} language={language} isToggled={showGrabFlowerCaption}/>

      <ActionEvent
        x={240}
        y={320}
        style={{
          width: '2rem',
          height: '2rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowCoffeeCaption(true)
          setTimeout(() => {
            setShowCoffeeCaption(false)
          }, 2000)
        }} />

      <Cookie
        x={150}
        y={320}
        activation={() => {
          setShowCookieCaption(true)
          setTimeout(() => {
            setShowCookieCaption(false)
          }, 2000)
        }}
        eat={async () => {
          setShowCrumbCaption(true)

          await setTimeout(() => {
            setShowCrumbCaption(false)
          }, 3000)
        }}
        grab={async () => {
          setShowGrabCookieCaption(true)
          await setTimeout(() => {
            setShowCrumbCaption(false)
          }, 3000)
        }}
      />

      <Flower
        x={250}
        y={320}
        activation={() => {
          setShowFlowerCaption(true)
          setTimeout(() => {
            setShowFlowerCaption(false)
          }, 3000)
        }}
        grab={async () => {
          setShowGrabFlowerCaption(true)

          await setTimeout(() => {
            setShowGrabFlowerCaption(false)
          }, 3000)
        }}
        put={async () => {
          console.log('putting flower back.')
        }}

      />
    </>
  )
}

export default ActionsKitchen;