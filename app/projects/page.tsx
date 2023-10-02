import Image from 'next/image';

import audioPic from 'public/assets/audio_redaction.png';
import eventoPic from 'public/assets/pro_evento.png';
import musicPic from 'public/assets/music_rater.png';
import sortPic from 'public/assets/sorting_challenge.png';
import spotPic from 'public/assets/spot_me_trojan.png';

import Header from '../components/header';

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <Header />
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-1">
            Audio Redaction Tool
          </h1>
          <Image
            src={audioPic}
            alt="sort"
          />
          <a
            href="https://github.com/lada-cybercrime/USC-CSCI-401-Capstone-Fall-2021"
            className="text-cyan-400 font-semibold"
          >
            Link
          </a>
          <p>
            Capstone project made in collaboration with Los Angeles County District Attorney's
            Office. Created an audio redaction tool to help handle hundreds of hours of court
            transcripts. Built using Electron, React, and FFmpeg.
          </p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-1">
            Event Pro
          </h1>
          <Image
            src={eventoPic}
            alt="sort"
          />
          <a
            href="https://github.com/jasonwlau/eventpro"
            className="text-cyan-400 font-semibold"
          >
            Link
          </a>
          <p>
            Application for users to hold and schedule events using the Zoom API.
            Also allowed users to search for ongoing or future events and add
            friend groups. Built using React, Express, and FireBase.
          </p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-1">
            Music Rater
          </h1>
          <Image
            src={musicPic}
            alt="sort"
          />
          <a
            href="https://github.com/jasonwlau/music-rater"
            className="text-cyan-400 font-semibold"
          >
            Link
          </a>
          <p>
            Full-stack application that allows users to suggest songs and pick songs
            with a leaderboard based on top rated songs and divided by genre according
            to Spotify API. Built using React, Express, and MongoDB.
          </p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-1">
            Spot Me Trojan
          </h1>
          <Image
            src={spotPic}
            alt="SpotMeTrojan"
          />
          <a
            href="https://github.com/jasonwlau/workout-buddy"
            className="text-cyan-400 font-semibold"
          >
            Link
          </a>
          <p>
            Web application that matches people with similar workout interests and availabilities
            together, giving them the option to schedule workouts together.
            Built using HTML, CSS, Javascript, Java, and MySQL.
          </p>
        </div>
        <div className="pb-5">
          <h1 className="font-bold text-3xl pb-1">
            Sorting Challenge
          </h1>
          <Image
            src={sortPic}
            alt="sort"
          />
          <a
            href="https://github.com/jasonwlau/sustainla"
            className="text-cyan-400 font-semibold"
          >
            Link
          </a>
          <p>
            Project in React that tested how well users sorted different items into
            landfill, recycling, and compost. Built during LA Hacks.
          </p>
        </div>
      </div>
    </div>
  );
}
