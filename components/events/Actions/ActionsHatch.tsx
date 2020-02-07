import { useEffect, useState } from "react";

import ActionEvent from "./ActionEvent";
import Calendar from "../Calendar/Calendar";

// captions for Kitchen scene
import EscapeCaption from "../../captions/texts/hatch/EscapeCaption";
import Firies from "../../captions/texts/hatch/Firies";
import IkeaBox from "../../captions/texts/hatch/IkeaBox";
import InteractionCaption from "../../captions/texts/hatch/InteractionCaption";
import LookAtCalendar from "../../captions/texts/hatch/LookAtCalendar";
import TryNotToDie from "../../captions/texts/hatch/TryNotToDie";

const ActionsHatch = ({ language, increaseLovePoints, decreaseLovePoints, setHasCookie,
  setHasFlower,
  setHasWrench }) => {

  // Hatch captions states
  const [showInteractionCaption, setShowInteractionCaption] = useState(false);
  const [showEscapeCaption, setShowEscapeCaption] = useState(false);
  const [showTryNotToDie, setShowTryNotToDie] = useState(false);
  const [showIkeaBox, setShowIkeaBox] = useState(false);
  const [showLookAtCalendar, setShowLookAtCalendar] = useState(false);
  const [showFiries, setShowFiries] = useState(false);

  let firstInteractionCounter = 0;

  const runInteraction = () => {
    firstInteractionCounter++;
    setShowInteractionCaption(true)
    setTimeout(() => {
      setShowInteractionCaption(false)
    }, 3000);
  }

  useEffect(() => {
    runInteraction();
  }, []);

  return (
    <>
      <InteractionCaption x={300} y={100} language={language} isToggled={showInteractionCaption} />
      <EscapeCaption x={300} y={100} language={language} isToggled={showEscapeCaption} />
      <TryNotToDie x={300} y={100} language={language} isToggled={showTryNotToDie} />
      <IkeaBox x={300} y={100} language={language} isToggled={showIkeaBox} />
      <LookAtCalendar x={300} y={100} language={language} isToggled={showLookAtCalendar} />
      <Firies x={300} y={100} language={language} isToggled={showFiries} />

      <ActionEvent
        x={770}
        y={100}
        style={{
          width: '8rem',
          height: '12rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowEscapeCaption(true)
          setTimeout(() => {
            setShowEscapeCaption(false)
          }, 3000)
        }} />

      <ActionEvent
        x={640}
        y={130}
        style={{
          width: '6rem',
          height: '7rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowTryNotToDie(true)
          setTimeout(() => {
            setShowTryNotToDie(false)
          }, 3000)
        }} />

      <ActionEvent
        x={390}
        y={290}
        style={{
          width: '3rem',
          height: '2rem',
          background: 'transparent',
        }}
        activation={() => {
          setShowIkeaBox(true)
          setTimeout(() => {
            setShowIkeaBox(false)
          }, 3000)
        }} />

      <Calendar
        x={90}
        y={150}
        style={{
          width: '5rem',
          height: '8rem'
        }}
        activation={() => {

          }}
          look={() => {
            setShowLookAtCalendar(true)
            setTimeout(() => {
              setShowLookAtCalendar(false)
            }, 3000)
            increaseLovePoints()
          }}
          admire={() => {
            setShowFiries(true)
            setTimeout(() => {
              setShowFiries(false);
              window.open('https://quickweb.westpac.com.au/OnlinePaymentServlet?cd_community=NSWRFS&cd_currency=AUD&cd_supplier_business=DONATIONS&action=EnterDetails', '_blank');
            }, 3000)
            decreaseLovePoints()
          }}
        />
    </>
  )
}

export default ActionsHatch;