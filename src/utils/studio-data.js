import NightMare from "../assets/studio/nightmare.jpg";
import Inside from "../assets/studio/inside.png";
import InsidePoster from "../assets/studio/inside-poster.jpg";
import NightMarePoster from "../assets/studio/nightmare-poster.jpg";
export const projects = [
    {
        id: 1,
        title: "The NightMare",
        description: "The Thrilling Audio Story",
        image: NightMare,
        spotifyLink:
            "https://open.spotify.com/episode/34u9Qml8vGae4yA3r92LDk?si=2be08c0d78084630",
        released: true,
    },
    {
        id: 2,
        title: "Inside my Heart",
        description: "A Lovely Story of Girl",
        image: Inside,
        spotifyLink: "https://open.spotify.com/playlist/",
        released: false,
    },
];

export const images = [
    { src: InsidePoster, name: "Inside my Heart" },
    { src: NightMare, name: "The NightMare" },
    { src: NightMarePoster, name: "The NightMare" },
    { src: Inside, name: "Inside my Heart" },
];