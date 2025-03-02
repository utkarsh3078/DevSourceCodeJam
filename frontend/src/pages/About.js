import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex pt-8 justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-bold text-center m-6 text-blue-600">About Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to our Confession Platform – a safe space where you can express your thoughts, share your feelings, and confide in others without judgment. Our goal is to provide a supportive and anonymous environment where everyone can feel heard. <span className="text-purple-600">🤫💬</span>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We believe that everyone has a <span className="text-purple-600">story</span> to tell, and sometimes, all we need is someone to listen. Whether it's a <span className="text-purple-600">secret</span>, an <span className="text-purple-600">apology</span>, or something that's been weighing on your mind, this platform gives you the freedom to share without fear. <span className="text-purple-600">💌🗣️</span>
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Our mission is to foster a community of <span className="text-purple-600">understanding</span> and <span className="text-purple-600">empathy</span>. We want to create a space where people can connect, support each other, and embrace their vulnerabilities. <span className="text-purple-600">🤝💖</span> No matter who you are or what you've been through, your <span className="text-purple-600">voice</span> matters here. <span className="text-purple-600">🎤✨</span>
        </p>
        <p className="text-lg text-gray-700">
          Thank you for being a part of this journey, and remember, you're never alone in your thoughts. <span className="text-purple-600">🌟🙌</span>
        </p>
      </div>
    </div>
  );
}

export default About;
