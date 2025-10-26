import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SpotifyData {
	isPlaying: boolean;
	title: string;
	artist: string;
	album: string;
	albumImageUrl: string;
	songUrl: string;
}

export default function SpotifyNowPlaying() {
	const [result, setResult] = useState<SpotifyData | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchNowPlaying = async () => {
			try {
				const response = await fetch("/api/nowPlaying");
				const data = await response.json();
				setResult(data);
			} catch (error) {
				console.error("Error fetching Spotify data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchNowPlaying();
	}, []);

	if (isLoading) {
		return (
			<motion.a
				href="https://open.spotify.com/user/akhilrawat"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex w-fit items-center gap-2.5 rounded-lg border border-body/20 bg-amber-50/50 p-3 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-amber-100/50"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}>
				<div className="flex items-center gap-2.5">
					<div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
						<svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.04-1.02 15.24 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
						</svg>
					</div>
					<div className="flex flex-col">
						<p className="text-xs font-medium text-green-600">Spotify</p>
						<p className="text-xs">
							<span className="font-medium text-black underline-offset-4 transition duration-150 ease-in-out">
								Hold up
							</span>
							<br />
							Checking Akhil's Spotify...
						</p>
					</div>
				</div>
			</motion.a>
		);
	}

	if (!result || !result.isPlaying) {
		return (
			<motion.a
				href="https://open.spotify.com/user/akhilrawat"
				target="_blank"
				rel="noopener noreferrer"
				className="group flex w-fit items-center gap-2.5 rounded-lg border border-body/20 bg-amber-50/50 p-3 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-amber-100/50"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}>
				<div className="flex items-center gap-2.5">
					<div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
						<svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.04-1.02 15.24 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
						</svg>
					</div>
					<div className="flex flex-col">
						<p className="text-xs font-medium text-green-600">Spotify</p>
						<p className="text-xs">
							<span className="font-medium text-black underline-offset-4 transition duration-150 ease-in-out">
								Not playing
							</span>
							<br />
							Nothing playing right now
						</p>
					</div>
				</div>
			</motion.a>
		);
	}

	return (
		<motion.a
			href={result.songUrl}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex w-fit items-center gap-2.5 rounded-lg border border-body/20 bg-amber-50/50 p-3 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-amber-100/50"
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}>
			<div className="flex items-center gap-2.5">
				<img
					src={result.albumImageUrl}
					alt={`${result.album} album cover`}
					className="h-8 w-8 rounded-full object-cover"
				/>
				<div className="flex flex-col">
					<p className="text-xs font-medium text-green-600">Now playing</p>
					<p className="text-xs">
						<span className="font-medium text-black underline-offset-4 transition duration-150 ease-in-out">
							{result.title}
						</span>
						<br />
						by {result.artist}
					</p>
				</div>
			</div>
		</motion.a>
	);
}
