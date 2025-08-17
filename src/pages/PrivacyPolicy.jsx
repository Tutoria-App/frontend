// src/pages/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const sections = [
    { id: 'intro', title: 'Introduction' },
    { id: 'data-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Information' },
    { id: 'legal-bases', title: 'Legal Bases for Processing' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'sharing', title: 'Sharing & Disclosure' },
    { id: 'security', title: 'Data Security' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'children', title: "Children's Privacy" },
    { id: 'international', title: 'International Transfers' },
    { id: 'changes', title: 'Changes to this Policy' },
    { id: 'contact', title: 'Contact Us' },
];

const PrivacyPolicy = () => {
    useEffect(() => {
        document.title = 'Privacy Policy • Tutoria';
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white">
            {/* Top bar (simple brand bar to mirror LandingPage) */}
            <nav className="w-full bg-purple-800/70 backdrop-blur py-4 px-6 flex items-center justify-between shadow-md">
                <Link to="/" className="text-xl font-bold text-yellow-300">Tutoria</Link>
                <div className="hidden md:flex gap-4 text-sm">
                    <Link to="/askaway" className="hover:text-yellow-300">AskAway</Link>
                    <Link to="/arkive" className="hover:text-yellow-300">Arkive</Link>
                    <Link to="/studymart" className="hover:text-yellow-300">StudyMart</Link>
                </div>
            </nav>

            {/* Hero header */}
            <header className="px-6 md:px-20 py-16">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Privacy <span className="text-yellow-400">Policy</span>
                    </h1>
                    <p className="mt-3 text-purple-100/90 max-w-2xl">
                        Your privacy matters. This page explains what we collect, why we collect it, and how you can control your information.
                    </p>
                    <p className="mt-2 text-xs text-purple-200/80">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </motion.div>
            </header>

            {/* Content area */}
            <main className="bg-white text-gray-900 rounded-t-3xl shadow-2xl px-6 md:px-20 pb-20 pt-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* TOC */}
                    <aside className="lg:col-span-4 xl:col-span-3">
                        <div className="sticky top-6 bg-purple-50 border border-purple-100 rounded-2xl p-5 shadow">
                            <h2 className="text-sm font-semibold text-purple-800 mb-3">On this page</h2>
                            <nav className="space-y-2 text-sm">
                                {sections.map(s => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="block px-3 py-2 rounded-lg hover:bg-purple-100 hover:text-purple-900"
                                    >
                                        {s.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Body */}
                    <section className="lg:col-span-8 xl:col-span-9 space-y-8">
                        {/* Intro */}
                        <motion.div
                            id="intro"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <p>
                                Welcome to Tutoria. This Privacy Policy describes how Tutoria (“we”, “us”, or “our”) collects,
                                uses, and shares personal information when you use our website and services, including features
                                like AskAway, Arkive, StudyMart, and live tutoring.
                            </p>
                        </motion.div>

                        {/* Data we collect */}
                        <motion.div
                            id="data-we-collect"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Information We Collect</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <span className="font-semibold">Account Information:</span> username, email, password (hashed).
                                </li>
                                <li>
                                    <span className="font-semibold">Tutor Profile:</span> name, phone number, qualifications,
                                    subjects, and optional profile details you provide.
                                </li>
                                <li>
                                    <span className="font-semibold">Usage & Device Data:</span> log data (pages viewed, actions),
                                    approximate location (derived from IP), device/browser information, and app telemetry for
                                    reliability and analytics.
                                </li>
                                <li>
                                    <span className="font-semibold">Content:</span> posts, comments, uploaded files (e.g., Arkive documents),
                                    and messages you choose to share.
                                </li>
                                <li>
                                    <span className="font-semibold">Payments (for future Premium):</span> if premium features are activated,
                                    we may process limited payment metadata via PCI-compliant providers (we don’t store full card numbers).
                                </li>
                            </ul>
                        </motion.div>

                        {/* How we use */}
                        <motion.div
                            id="how-we-use"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">How We Use Information</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Provide, maintain, and improve the platform and its features.</li>
                                <li>Match students with tutors and personalize content recommendations.</li>
                                <li>Ensure safety, integrity, and prevent fraud or abuse.</li>
                                <li>Communicate service updates, security notices, and (with consent) marketing.</li>
                                <li>Comply with legal obligations and enforce our Terms.</li>
                            </ul>
                        </motion.div>

                        {/* Legal bases */}
                        <motion.div
                            id="legal-bases"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Legal Bases for Processing</h3>
                            <p>
                                Depending on your region, we rely on one or more of: performance of a contract, legitimate interests
                                (e.g., service safety and improvement), consent (e.g., optional analytics/marketing), and legal obligations.
                            </p>
                        </motion.div>

                        {/* Cookies */}
                        <motion.div
                            id="cookies"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Cookies & Tracking</h3>
                            <p className="mb-2">
                                We use cookies and similar technologies to keep you signed in, remember preferences, and measure performance.
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Strictly Necessary (authentication, security)</li>
                                <li>Functional (preferences, UX)</li>
                                <li>Analytics (aggregated performance and usage)</li>
                            </ul>
                            <p className="mt-2 text-sm text-gray-600">
                                You can control cookies via your browser settings; disabling some may impact functionality.
                            </p>
                        </motion.div>

                        {/* Sharing */}
                        <motion.div
                            id="sharing"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Sharing & Disclosure</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Service providers (hosting, analytics, payment) bound by confidentiality.</li>
                                <li>Other users, when you post or share content publicly.</li>
                                <li>Legal and safety reasons (e.g., compliance with law, investigating abuse).</li>
                                <li>Business transfers (e.g., merger/acquisition) with appropriate safeguards.</li>
                            </ul>
                        </motion.div>

                        {/* Security */}
                        <motion.div
                            id="security"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Data Security</h3>
                            <p>
                                We employ reasonable administrative, technical, and organizational measures (e.g., encryption in transit,
                                hashed passwords, role-based access). No method is 100% secure; please use a strong, unique password.
                            </p>
                        </motion.div>

                        {/* Retention */}
                        <motion.div
                            id="retention"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Data Retention</h3>
                            <p>
                                We retain personal data only as long as necessary for the purposes described above or as required by law.
                                You can request deletion of your account; some records may be kept for compliance, dispute resolution,
                                and safety.
                            </p>
                        </motion.div>

                        {/* Your rights */}
                        <motion.div
                            id="your-rights"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Your Rights</h3>
                            <p className="mb-2">
                                Depending on your location, you may have rights to access, correct, delete, restrict or object to processing,
                                data portability, and withdrawal of consent.
                            </p>
                            <p className="text-sm text-gray-600">
                                To exercise these rights, email us at <a className="text-purple-700 underline" href="mailto:support@tutoria.bn">support@tutoria.bn</a>.
                            </p>
                        </motion.div>

                        {/* Children */}
                        <motion.div
                            id="children"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Children’s Privacy</h3>
                            <p>
                                Tutoria is intended for users who meet the minimum age of digital consent in their region. If we learn that
                                a child’s data was collected without appropriate consent, we will take steps to delete it.
                            </p>
                        </motion.div>

                        {/* International */}
                        <motion.div
                            id="international"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">International Transfers</h3>
                            <p>
                                Your information may be processed in countries different from yours. Where required, we use appropriate
                                safeguards (e.g., contractual clauses) to protect your data.
                            </p>
                        </motion.div>

                        {/* Changes */}
                        <motion.div
                            id="changes"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Changes to This Policy</h3>
                            <p>
                                We may update this policy from time to time. Significant changes will be announced in-app or via email.
                                The “Last updated” date reflects the latest revision.
                            </p>
                        </motion.div>

                        {/* Contact */}
                        <motion.div
                            id="contact"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ amount: 0.2, once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 shadow"
                        >
                            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
                            <p className="mb-2">
                                If you have questions about this policy or your data, contact us:
                            </p>
                            <ul className="space-y-1">
                                <li>Email: <a className="text-purple-700 underline" href="mailto:support@tutoria.bn">support@tutoria.bn</a></li>
                                <li>Phone: +673 123 4567</li>
                                <li>Address: Tutoria HQ, Bandar Seri Begawan, Brunei</li>
                            </ul>
                        </motion.div>
                    </section>
                </div>

                {/* Footer CTA */}
                <div className="max-w-7xl mx-auto mt-16">
                    <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-8 rounded-2xl shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h3 className="text-2xl font-bold">Ready to keep learning?</h3>
                            <p className="text-purple-100">Return to the home page or explore the community.</p>
                        </div>
                        <div className="flex gap-3">
                            <Link to="/" className="px-5 py-3 bg-yellow-400 text-purple-900 rounded-lg font-semibold hover:bg-yellow-300">
                                Home
                            </Link>
                            <Link to="/askaway" className="px-5 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100">
                                Visit AskAway
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            {/* Site footer */}
            <footer className="bg-purple-900 text-white py-8 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h3 className="font-bold mb-2 text-yellow-400">About Tutoria</h3>
                        <p>We support learners with digital tools, resources, and mentorship across Brunei.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-yellow-400">Legal</h3>
                        <ul className="space-y-1">
                            <li><Link to="/policy" className="hover:text-yellow-300">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-yellow-300">Terms of Use</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2 text-yellow-400">Contact</h3>
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

export default PrivacyPolicy;