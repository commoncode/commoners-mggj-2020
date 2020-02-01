import { Howl, Howler } from "howler";
import shuffle from "lodash.shuffle";

const playNext = () => {
  shuffle(tracks)[0].play();
};

const tracks = [
  new Howl({
    src: ["/music/shanty1.m4a"],
    onend: playNext
  }),
  new Howl({
    src: ["/music/shanty2.m4a"],
    onend: playNext
  }),
  new Howl({
    src: ["/music/shanty3.m4a"],
    onend: playNext,
    autoplay: true
  })
];
