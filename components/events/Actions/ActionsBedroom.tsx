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

const ActionsBedroom = ({
  language,
  setTargetLocationLover,
  setShowOverlayNotClickable,
  increaseLovePoints,
  decreaseLovePoints
}) => {
  // Bedroom captions states
  const [showArgument, setShowArgument] = useState(true);
  const [showBedCaption, setShowBedCaption] = useState(false);
  const [showPhotoCaption, setShowPhotoCaption] = useState(false);
  const [showPanicCaption, setShowPanicCaption] = useState(false);
  const [showPlayerShout, setShowPlayerShout] = useState(false);
  const [showLoverYelling, setShowLoverYelling] = useState(false);

  // leaks
  const [showFirstLeak, setShowFirstLeak] = useState(true);
  const [showSecondLeak, setShowSecondLeak] = useState(false);

  const runInitialConversation = async () => {
    await setTimeout(() => {
      setShowArgument(false);
      setShowOverlayNotClickable(false);
    }, 5000);

    await setTimeout(() => {
      decreaseLovePoints();
      setTargetLocationLover(1000, 50);
    }, 3500);
  };

  useEffect(() => {
    runInitialConversation();
  }, []);

  return (
    <>
      <Argument x={510} y={120} language={language} isToggled={showArgument} />
      <PlayerShout
        x={450}
        y={170}
        language={language}
        isToggled={showPlayerShout}
      />
      <LoverYelling
        x={780}
        y={150}
        language={language}
        isToggled={showLoverYelling}
      />
      <Photo x={300} y={180} language={language} isToggled={showPhotoCaption} />
      <Bed x={250} y={180} language={language} isToggled={showBedCaption} />
      <Panic x={450} y={150} language={language} isToggled={showPanicCaption} />

      <ActionEvent
        x={220}
        y={300}
        style={{
          width: "16rem",
          height: "10rem",
          background: "transparent"
        }}
        activation={() => {
          setShowBedCaption(true);
          setTimeout(() => {
            setShowBedCaption(false);
          }, 1500);
        }}
      />

      <ActionEvent
        x={368}
        y={230}
        style={{
          width: "5rem",
          height: "3rem",
          background: "transparent"
        }}
        activation={() => {
          setShowPhotoCaption(true);
          setTimeout(() => {
            setShowPhotoCaption(false);
          }, 1500);
        }}
      />

      {/* Leaks */}
      {showFirstLeak && (
        <Leak
          x={500}
          y={200}
          activation={() => {
            console.log("click leak");
          }}
          repair={() => {
            setShowSecondLeak(true);
          }}
          yell={async () => {
            setShowPlayerShout(true);

            await setTimeout(() => {
              setShowPlayerShout(false);
            }, 1500);

            await setTimeout(() => {
              setShowLoverYelling(true);
            }, 2000);

            await setTimeout(() => {
              setShowLoverYelling(false);
            }, 3500);
          }}
          panic={async () => {
            setShowPanicCaption(true);

            await setTimeout(() => {
              setShowPanicCaption(false);
            }, 2500);
          }}
        />
      )}

      {showSecondLeak && (
        <Leak
          x={835}
          y={216}
          activation={() => {
            // setShowSecondLeak(false);
          }}
          isSecondVersion
          yell={async () => {
            setShowPlayerShout(true);

            await setTimeout(() => {
              setShowPlayerShout(false);
            }, 1500);

            await setTimeout(() => {
              setShowLoverYelling(true);
            }, 2000);

            await setTimeout(() => {
              setShowLoverYelling(false);
            }, 3500);
          }}
          panic={async () => {
            setShowPanicCaption(true);

            await setTimeout(() => {
              setShowPanicCaption(false);
            }, 2500);
          }}
        />
      )}

      {/* END Leaks */}
    </>
  );
};

export default ActionsBedroom;
