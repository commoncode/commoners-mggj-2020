import { useState } from "react";

import ActionEvent from "../Actions/ActionEvent";

// captions for Bedroom scene
import Bed from "../../captions/texts/bedroom/Bed";
import LoverYelling from "../../captions/texts/bedroom/LoverYelling";
import Panic from "../../captions/texts/bedroom/Panic";
import Photo from "../../captions/texts/bedroom/Photo";
import PlayerShout from "../../captions/texts/bedroom/PlayerShout";
import Wrench from "../../captions/texts/bedroom/Wrench";

// captions for Kitchen scene
import CoffeeCaption from "../../captions/texts/kitchen/CoffeeCaption";
import CookieCaption from "../../captions/texts/kitchen/CoffeeCaption";
import FlowerCaption from "../../captions/texts/kitchen/FlowerCaption";
import LeakingCaption from "../../captions/texts/kitchen/LeakingCaption";
import WrenchCaption from "../../captions/texts/kitchen/WrenchCaption";

const Actions = ({language}) => {

  // Bedroom captions states
  const [showBedCaption, setShowBedCaption] = useState(false);
  const [showPhotoCaption, setShowPhotoCaption] = useState(false);
  const [showPanicCaption, setShowPanicCaption] = useState(false);


  return (
    <>
      <PlayerShout x={450} y={170} language={language} isToggled />
      <LoverYelling x={820} y={270} language={language} isToggled />
      <Photo x={300} y={180} language={language} isToggled={showPhotoCaption} />
      <Bed x={250} y={180} language={language} isToggled={showBedCaption} />
      <Panic x={450} y={150} language={language} isToggled={showPanicCaption} />

      <ActionEvent
        x={220}
        y={300}
        style={{
          width: '16rem',
          height: '10rem',
          background: 'transparent',
        }}
        activation={() => {
          console.log('Click on bed')
          console.log(showBedCaption)
          setShowBedCaption(true)
          console.log(showBedCaption)
          setTimeout(() => {
            setShowBedCaption(false)
          }, 1500)
        }} />

      <ActionEvent
        x={368}
        y={230}
        style={{
          width: '5rem',
          height: '3rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowPhotoCaption(true)
          setTimeout(() => {
            setShowPhotoCaption(false)
          }, 1500)
        }} />

      <ActionEvent
        x={600}
        y={450}
        style={{
          width: '8rem',
          height: '3rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowPanicCaption(true)
          setTimeout(() => {
            setShowPanicCaption(false)
          }, 1500)
        }} />
    </>
  )
}

export default Actions;