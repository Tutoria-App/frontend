// src/pages/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import studentVideo from '../assets/student-video.mp4';
import heroImage from '../assets/undraw_online-learning_tgmv.svg';
import featureImg from '../assets/undraw_teaching_58yg.svg';
import exploreImg from '../assets/undraw_professor_d7zn.svg';
import joinImg from '../assets/undraw_team-collaboration_phnf.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white overflow-hidden">
      {/* Navbar - Only for logged in users */}
      {isLoggedIn && (
        <nav className="w-full bg-purple-800 py-4 px-6 flex justify-between items-center shadow-md z-10">
          <h1 className="text-xl font-bold text-yellow-300">Tutoria</h1>
          <div className="flex gap-4">
            <Link to="/dashboard" className="hover:text-yellow-300">Dashboard</Link>
            <Link to="/askaway" className="hover:text-yellow-300">AskAway</Link>
            <Link to="/logout" className="hover:text-yellow-300">Logout</Link>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover opacity-20"
          src={studentVideo}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1 }}
          >
            Welcome to <span className="text-yellow-400">Tutoria</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-xl mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            An interactive learning platform designed to empower students in Brunei through collaboration, resources, and real-time support.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/register"
              className="px-6 py-3 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              I Already Have an Account
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Why Tutoria Section */}
      <section className="px-6 py-12 md:px-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={heroImage}
            alt="Interactive learning"
            className="rounded-lg shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Tutoria?</h2>
            <ul className="space-y-4 text-lg">
              <li>📚 Access free and premium learning resources</li>
              <li>👨‍🏫 Connect with expert tutors from Brunei</li>
              <li>📝 Post questions and get real-time help</li>
              <li>📈 Track your learning journey and progress</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 md:px-20 bg-purple-100 text-gray-900">
        <motion.div
          className="max-w-6xl mx-auto text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold">What We Offer</h2>
          <p className="mt-2 text-lg">Empowering students with tools for growth and collaboration.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInUp} transition={{ duration: 0.6 }}>
            <h3 className="text-xl font-semibold mb-2">Interactive Courses</h3>
            <p>Engage with hands-on content and track your understanding as you go.</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-xl font-semibold mb-2">Live Tutoring</h3>
            <p>Join live sessions and get help from experienced educators in Brunei.</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
            initial="hidden" whileInView="visible" viewport={{ amount: 0.2 }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p>Post questions, get answers, and connect with fellow learners.</p>
          </motion.div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-6 py-12 md:px-20 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={exploreImg}
            alt="Explore content"
            className="rounded-lg shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore. Learn. Grow.</h2>
            <p className="text-lg">Whether you’re preparing for exams or learning for fun, Tutoria offers materials across subjects tailored to your needs.</p>
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="px-6 py-16 md:px-20 bg-purple-700 text-white text-center">
        <motion.img
          src={joinImg}
          alt="Join us"
          className="w-48 mx-auto mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        />
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join a vibrant learning community and elevate your learning experience today.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            to="/register"
            className="inline-block px-8 py-4 bg-yellow-400 text-purple-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Join Tutoria Now
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-8 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2 text-yellow-400">About Tutoria</h3>
            <p>
              Tutoria is a learning platform created for students in Brunei. We aim to support learners with digital tools, resources, and mentorship.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-yellow-400">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/askaway" className="hover:text-yellow-300">AskAway</Link></li>
              <li><Link to="/arkive" className="hover:text-yellow-300">Arkive</Link></li>
              <li><Link to="/studymart" className="hover:text-yellow-300">StudyMart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-yellow-400">Contact Us</h3>
            <p>Email: support@tutoria.bn</p>
            <p>Phone: +673 123 4567</p>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-300">
          © {new Date().getFullYear()} Tutoria. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
