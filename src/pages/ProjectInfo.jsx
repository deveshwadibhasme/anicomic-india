import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSpotify, FaArrowLeft } from 'react-icons/fa';
import { projects, characterImages } from '../utils/studio-data';


const ProjectInfo = () => {
    
    
    const { project } = useParams();

    useEffect(() => {
       if (location.pathname === `/studio/${project}`) {
         window.scrollTo({ top: 0 });
       }
     }, [location.pathname]);

    const projectKey = project;
    const projectData = projects.find(
        p => p.title.toLowerCase().replace(/\s+/g, '-') === project
    );

    const getCharImage = (projectKey, index) => {
        const charImage = characterImages[0][projectKey][index];
        return charImage
    };


    if (!projectData || projectData.released === false) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-black">
                <h2 className="text-3xl text-center font-bold mb-4 text-amber-50">Project not found or Yet to be released</h2>
                <button onClick={()=>window.history.back()} className="flex items-center text-blue-600 hover:underline">
                    <FaArrowLeft className="mr-2" /> Back
                </button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-screen min-h-screen mx-auto my-8 p-4 md:p-10 bg-white/90 rounded-3xl shadow-2xl backdrop-blur-lg"
        >
            <Link onClick={()=>window.history.back()}  className="inline-flex text-lg items-center text-white hover:text-blue-600 mb-6">
                <FaArrowLeft className="mr-2" /> Back
            </Link>
            <motion.h1
                layoutId={`title-${projectData.id}`}
                className="text-3xl md:text-5xl font-extrabold mb-8 text-white tracking-tight"
            >
                {projectData.title}
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {/* Series Portrait */}
                {projectData.image && (
                    <div className="flex flex-col items-center w-full">
                        <img
                            src={projectData.image}
                            alt={`${projectData.title} Portrait`}
                            className="w-48 h-70 object-cover rounded-2xl shadow-lg border-2 border-blue-200 mb-3 transition-transform duration-300 hover:scale-105"
                        />
                        <div className="text-center text-gray-500 text-sm mb-2">Series Portrait</div>
                        {projectData.spotifyLink && (
                            <a
                                key={projectData.spotifyLink}
                                href={projectData.spotifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-3xl bg-white p-2 rounded-2xl items-center gap-2 text-green-600 font-semibold hover:underline"
                            >
                                <FaSpotify /> Listen on Spotify
                            </a>
                        )}
                    </div>
                )}
                <div className="md:col-span-2 flex flex-col gap-5">
                    <img
                        src={projectData.posterImage}
                        alt={projectData.title}
                        className="w-full absolute left-0 top-0 -z-10 h-full object-cover blur-md object-top rounded-xl"
                    />
                    {/* <h4 className='text-2xl text-white'>Description</h4> */}
                    <p className="italic text-white text-base md:text-xl">{projectData.description}</p>
                </div>
            </div>
            {/* Characters & Voices */}
            {projectData.characterVoice && (
                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Characters & Voices</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
                        {projectData.characterVoice[0].map((char, idx) => (
                            <motion.div
                                key={char.name}
                                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}
                                className="bg-white/80 rounded-2xl p-5 flex flex-col items-center shadow-lg border border-blue-100 transition-all"
                            >
                                <div className="font-bold text-black text-center text-lg">{char.name}</div>
                                <div className="text-lg text-gray-800 text-center">{char.voice}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
            {/* Characters Images */}
            {characterImages[0][projectKey] && (
                <div className="mt-12">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">Characters Images</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7">
                        {characterImages[0][projectKey].map((char, idx) => (
                            <motion.div
                                key={char.name}
                                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(0,0,0,0.14)' }}
                                className="bg-white/80 rounded-2xl p-5 flex flex-col items-center shadow-lg border border-blue-100 transition-all"
                            >
                                <img
                                    src={getCharImage(projectKey, idx)}
                                    alt={char.name}
                                    className="w-full h-auto rounded-lg mb-3"
                                />
                                <div className="font-bold text-black text-center text-lg">{char.name}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectInfo;
