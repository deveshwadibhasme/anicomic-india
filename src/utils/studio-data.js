import NightMare from "../assets/studio/nightmare.jpg";
import Inside from "../assets/studio/inside.png";
import InsidePoster from "../assets/studio/inside-poster.jpg";
import NightMarePoster from "../assets/studio/nightmare-poster.jpg";
import Character1 from "../assets/studio/character/character-1.jpg";
import Character2 from "../assets/studio/character/character-2.jpg";
import Character3 from "../assets/studio/character/character-3.jpg";
import Character4 from "../assets/studio/character/character-4.jpg";
import Character5 from "../assets/studio/character/character-5.jpg";



export const projects = [
    {
        id: 1,
        title: "The NightMare",
        description: "The Thrilling Audio Story",
        image: NightMare,
        posterImage: NightMarePoster,
        spotifyLink:
            "https://open.spotify.com/episode/34u9Qml8vGae4yA3r92LDk?si=2be08c0d78084630",
        released: true,
        description: `Not all nightmares end when you wake up… Some begin exactly when your eyes open.
        Hayat, a fearless paranormal investigator, is called to a forgotten mansion in a quiet town — where a little girl claims the walls whisper to her at night. But what seems like another haunted case turns into a chilling descent into something darker… something ancient… something waiting.
        Every creak hides a cry.
        Every shadow holds a secret.
        And the deeper Hayat and her tech-genius partner Aron dig, the more the mansion reveals its terrifying truth — a buried past soaked in silence and screams.
        Chapter 1 is the beginning of a haunting journey, where reality bends, voices crawl through the cracks, and fear becomes the only constant.
        Because sometimes…
        Its not the ghosts you see,
        Its the ones listening back.`,
        characterName: ["Hayat", "Young Hayat", "Aron", "Hayat's Mom", "Hayat's Dad"],
        characterVoice: [[
            { name: "Hayat", voice: "Saniya Quazi" },
            { name: "Young Hayat", voice: "Kashish Mahure" },
            { name: "Aron", voice: "Piyush Nimbalkar" },
            { name: "Hayat's Mom", voice: "Huma Fatima" },
            { name: "Hayat's Dad", voice: "Sheikh Rehan" }
        ]],
    },
    {
        id: 2,
        title: "Inside my Heart",
        description: "A Lovely Story of Girl",
        image: Inside,
        posterImage: InsidePoster,
        spotifyLink: "https://open.spotify.com/playlist/",
        released: false,
    },
];

export const characterImages = [
    {
        "the-nightmare": [
            Character1,
            Character2,
            Character3,
            Character4,
            Character5,
        ]
    }
];

export const images = [
    { src: InsidePoster, name: "Inside my Heart" },
    { src: NightMare, name: "The NightMare" },
    { src: NightMarePoster, name: "The NightMare" },
    { src: Inside, name: "Inside my Heart" },
];

const preloadImages = () => {
    images.forEach(image => {
        const img = new Image();
        img.src = image.src;
    });
};
preloadImages();