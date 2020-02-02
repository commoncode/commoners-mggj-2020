import { useEffect, useState } from "react";

import ActionEvent from "./ActionEvent";
import Interaction from "../Interaction/Interaction";
import Emergency from "../Emergency/Emergency";

// captions for Kitchen scene
import AskForHelp from "../../captions/texts/helm/AskForHelp";
import BreakWindow from "../../captions/texts/helm/BreakWindow";
import Punch from "../../captions/texts/helm/Punch";

const ActionsHelm = ({
  language,
  increaseLovePoints,
  decreaseLovePoints,
  setHasCookie,
  setHasFlower,
  setHasWrench,
  setTypeEnding
}) => {

  // Control Room captions states
  const [showAskForHelp, setShowAskForHelp] = useState(false);
  const [showBreakWindow, setShowBreakWindow] = useState(false);
  const [showPunch, setShowPunch] = useState(false);

  return (
    <>
      <AskForHelp x={300} y={100} language={language} isToggled={showAskForHelp} />
      <BreakWindow x={300} y={100} language={language} isToggled={showBreakWindow} />
      <Punch x={300} y={100} language={language} isToggled={showPunch} />

      <Interaction
        x={100}
        y={100}
        activation={() => {

        }}
        ask={() => {
          setShowAskForHelp(true)
          setTimeout(() => {
            setShowAskForHelp(false)
            increaseLovePoints()
          }, 3000)
        }}
      />

      <Emergency
        x={40}
        y={200}
        style={{
          width: '110px',
          height: '140px',
        }}
        activation={() => {

        }}
        punch={() => {
          setShowPunch(true)
          setTimeout(() => {
            setShowPunch(false)
            setTypeEnding(3)
          }, 3000)
        }}
        breakWindow={() => {
          if (setHasWrench) {
            setShowBreakWindow(true)
            setTimeout(() => {
              setShowBreakWindow(false)
              setHasWrench(false)
            }, 3000)
          }
        }
        }
      />
    </>
  )
}

export default ActionsHelm;