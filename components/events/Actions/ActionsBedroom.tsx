import { useEffect, useState } from "react";

import ActionEvent from "./ActionEvent";
import Leak from "../Leak";

// captions for Bedroom scene
import Argument from "../../captions/texts/bedroom/Argument";
import Bed from "../../captions/texts/bedroom/Bed";
import LoverYelling from "../../captions/texts/bedroom/LoverYelling";
import Panic from "../../captions/texts/bedroom/Panic";
import Photo from "../../captions/texts/bedroom/Photo";
import PlayerShout from "../../captions/texts/bedroom/PlayerShout";
import Wrench from "../../captions/texts/bedroom/Wrench";


const ActionsBedroom = ({ language, setTargetLocationLover, setShowOverlayNotClickable }) => {

  // Bedroom captions states
  const [showArgument, setShowArgument] = useState(true);
  const [showBedCaption, setShowBedCaption] = useState(false);
  const [showPhotoCaption, setShowPhotoCaption] = useState(false);
  const [showPanicCaption, setShowPanicCaption] = useState(false);
  const [showPlayerShout, setShowPlayerShout] = useState(false);
  const [showLoverYelling, setShowLoverYelling] = useState(false);
  const [showFirstLeak, setShowFirstLeak] = useState(false);
  const [showSecondLeak, setShowSecondLeak] = useState(false);

  const runInitialConversation = async () => {
    await setTimeout(() => {
      setShowFirstLeak(true);
    }, 500);

    await setTimeout(() => {
      setShowArgument(false);
      setShowOverlayNotClickable(false);
    }, 5000);

    await setTimeout(() => {
      setTargetLocationLover(1000, 50);
    }, 3500);

  };

  useEffect(() => {
    runInitialConversation();
  }, []);

  return (
    <>
      <Argument x={450} y={100} language={language} isToggled={showArgument} />
      <PlayerShout x={450} y={170} language={language} isToggled={showPlayerShout} />
      <LoverYelling x={820} y={270} language={language} isToggled={showLoverYelling} />
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
          setShowBedCaption(true)
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

      {/* Leaks */}
      {showFirstLeak &&
        <Leak x={759}
          y={198}
          activation={() => {
            console.log('click leak')
          }}
          repair={() => {
            setShowSecondLeak(true);
          }}
          yell={async () => {
            setShowPlayerShout(true)

            await setTimeout(() => {
              setShowPlayerShout(false)
            }, 1500)

            await setTimeout(() => {
              setShowLoverYelling(true)
            }, 2000)

            await setTimeout(() => {
              setShowLoverYelling(false)
            }, 3500)

          }}
          panic={() => {
            setShowPanicCaption(true)
            setTimeout(() => {
              setShowPanicCaption(false)
            }, 2500)
          }}
        />
      }

      {showSecondLeak && <Leak x={835} y={216} isSecondVersion activation={() => {

        // setShowSecondLeak(false);
      }}
        yell={async () => {
          setShowPlayerShout(true)

          await setTimeout(() => {
            setShowPlayerShout(false)
          }, 1500)

          await setTimeout(() => {
            setShowLoverYelling(true)
          }, 2000)

          await setTimeout(() => {
            setShowLoverYelling(false)
          }, 3500)
        }}
        panic={() => {
          setShowPanicCaption(true)
          setTimeout(() => {
            setShowPanicCaption(false)
          }, 2500)
        }}
      />}

      {/* END Leaks */}
    </>
  )
}

export default ActionsBedroom;