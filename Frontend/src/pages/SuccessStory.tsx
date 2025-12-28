import React from 'react';
import { motion } from 'framer-motion';

const successStories = [
	{
		title: 'The Train Carnival',
		location: 'Pune, Maharashtra',
		description: '45% revenue increase in 6 months',
		quote: "Our customers love the train system. It's become our signature feature and we're fully booked every weekend.",
		image: './p1.jpeg',
	},
	{
		title: 'The Platform 55',
		location: 'Faridkot, Punjab',
		description: '60% reduction in service time',
		quote: "The system paid for itself in 14 months. Staff productivity is up and our customers are happier than ever.",
		image: './p2.jpeg',
	},
	{
		title: 'The Train Restaurant Buxer',
		location: 'Buxer, Bihar',
		description: '70% increase in table turnover',
		quote: "Best investment we've made. The enterprise system handles our high volume seamlessly.",
		image: './p3.jpeg',
	},
];

export default function SuccessStory() {
	return (
		<div className="pt-20">
			<section className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center max-w-3xl mx-auto"
				>
					<h1 className="text-5xl md:text-6xl text-white mb-6">
						Success Stories
					</h1>
				</motion.div>
			</section>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				{successStories.map((story, index) => (
					<div
						key={index}
						className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
					>
						<img
							src={story.image}
							alt={story.title}
							className="w-full h-48 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl text-white mb-2">{story.title}</h3>
						<p className="text-gray-400 text-sm mb-2">{story.location}</p>
						<p className="text-gray-300 mb-4">{story.description}</p>
						<blockquote className="text-gray-500 italic">"{story.quote}"</blockquote>
					</div>
				))}
			</div>
		</div>
	);
}