import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaTelegramPlane, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
    const text = "Get in Touch";
    const [isTextRevealed, setIsTextRevealed] = useState(false);
    const [showBlinkingLine, setShowBlinkingLine] = useState(false);
    const contactText = "Contact Me";

    // Handle when the text is fully revealed
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsTextRevealed(true);
        }, text.split("").length * 100);


        const lineTimeout = setTimeout(() => {
            setShowBlinkingLine(true);
        }, text.split("").length * 100 + 500);
        return () => {
            clearTimeout(timeout);
            clearTimeout(lineTimeout);
        };
    }, []);

    return (
        <div id="contact" className="hero w-full h-screen flex flex-col border border-black">
            <div className="flex-grow basis-1/3 bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16">
                {/* Upper part content */}
                <h1 className="text-3xl sm:text-4xl font-bold flex items-center text-center">
                    <motion.span
                        className="typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {text.split(" ").map((word, wordIndex) => (
                            <motion.span key={wordIndex} className="inline-block">
                                {word.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: (wordIndex * 0.5 + index * 0.1),
                                            duration: 0.1,
                                        }}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {/* Add space between words */}
                                {wordIndex < text.split(" ").length - 1 && (
                                    <motion.span
                                        key={`space-${wordIndex}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            delay: (wordIndex + 1) * 0.5,
                                            duration: 0.1,
                                        }}
                                        className="inline-block"
                                    >
                                        &nbsp;
                                    </motion.span>
                                )}
                            </motion.span>
                        ))}
                    </motion.span>

                    {/* Blinking line appears after text reveal */}
                    {showBlinkingLine && (
                        <motion.span
                            className="ml-2 w-1 h-8 bg-green-500 animate-blink"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        ></motion.span>
                    )}
                </h1>

                {/* "Contact Me" with drop effect and added space between letters */}
                <div className="mt-4 flex justify-center">
                    {contactText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            className="inline-block mr-2"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                delay: text.split("").length * 0.1 + index * 0.1,
                                type: "spring",
                                stiffness: 200,
                                damping: 20,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>

            <div className="flex-grow basis-2/3 bg-gray-200 flex flex-col justify-start items-center px-4 sm:px-8 md:px-16">
                {/* Contact details placed below the heading */}
                <div className="text-center sm:mt-28 mt-24  lg:mt-16 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold">Just give me a call, I would love to talk to you</h2>

                    <div className="flex flex-col items-center mt-4 space-y-4 w-full max-w-md sm:max-w-lg">
                        {/* WhatsApp Link */}
                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <a
                                href="https://wa.me/17079687533"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <FaWhatsapp className="text-3xl sm:text-4xl mr-4" />
                                <span className="text-lg sm:text-2xl">+1 (707) 968-7533</span>
                            </a>
                        </div>

                        {/* Email Link 1 */}
                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <a
                                href="mailto:ivan@roganov.me"
                                className="flex items-center"
                            >
                                <FaEnvelope className="text-3xl sm:text-4xl mr-4" />
                                <span className="text-lg sm:text-2xl">ivan@roganov.me</span>
                            </a>
                        </div>

                        {/* Email Link 2 */}
                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <a
                                href="mailto:ceo@investmentfidelity.company"
                                className="flex items-center"
                            >
                                <FaEnvelope className="text-3xl sm:text-4xl mr-4" />
                                <span className="text-lg sm:text-2xl">ceo@investmentfidelity.company</span>
                            </a>
                        </div>

                        {/* Telegram Link */}
                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <a
                                href="https://t.me/nurked"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <FaTelegramPlane className="text-3xl sm:text-4xl mr-4" />
                                <span className="text-lg sm:text-2xl">@nurked</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <FaLinkedin className="text-3xl sm:text-4xl mr-4" />
                            <span className="text-lg sm:text-2xl">
                                <a href="https://www.linkedin.com/in/ivan-roganov/" target="_blank" rel="noopener noreferrer">linkedin.com/in/ivan-roganov</a>
                            </span>
                        </div>

                        <div className="flex items-center justify-start w-full ml-0 md:ml-64">
                            <FaMapMarkerAlt className="text-3xl sm:text-4xl mr-4" />
                            <span className="text-lg sm:text-2xl">Clearwater, Florida</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
