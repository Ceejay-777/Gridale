import { Howl } from "howler";
Howler.autoUnlock = true;

export const bgSound = new Howl({
  src: ["/Sounds/backgroundSound.mp3"],
  preload: true,
  loop: true,
  onplay: (id) => {
  },
  onpause: (id) => {
  },
  onmute: (id) => console.log("Muted:", id),
  onplayerror: (id, error) => console.error("Play error", error),
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.5,
});

export const correctClickSound = new Howl({
  src: ["/Sounds/interfaceWav.wav"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.5,
});

export const wrongClickSound = new Howl({
  src: ["/Sounds/wrong.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.5,
});

export const nextGridSound = new Howl({
  src: ["/Sounds/nextGrid.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.2,
});

export const timeUpSound = new Howl({
  src: ["/Sounds/timeUp.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.3,
});

export const buttonClickSound = new Howl({
  src: ["/Sounds/buttonClick.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.35,
});

export const successOneSound = new Howl({
  src: ["/Sounds/success1.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.5,
});

export const successTwoSound = new Howl({
  src: ["/Sounds/success2.mp3"],
  preload: true,
  onloaderror: (id, error) => {
    console.error("Error loading sound:", error, id);
  },
  volume: 0.5,
});

const sounds = [
  timeUpSound,
  correctClickSound,
  wrongClickSound,
  successOneSound,
  buttonClickSound,
  nextGridSound,
];

export const muteAllSounds = () => {
  sounds.forEach((sound) => sound.mute(true));
};

export const unmuteAllSounds = () => {
  sounds.forEach((sound) => sound.mute(false));
};

export const playSound = (sound, bool) => {
  if (bool) {
    sound.play()
  }
}