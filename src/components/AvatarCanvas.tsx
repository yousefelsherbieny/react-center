import { Html, OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { MyLoader } from "./MyLoader";

const BASE_PATH = "/react-center/models/";

const Avatar = () => {
	const [index, setIndex] = useState(1);
	const avatar = useGLTF(`${BASE_PATH}myavatar.glb`);
	const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		actions[names[index]]?.reset().fadeIn(0.5).play();

		return () => {
			actions[names[index]]?.fadeOut(0.5);
		};
	}, [index, actions, names]);

	return (
		<group>
			<primitive
				object={avatar.scene}
				scale={2}
				position-y={-2}
				rotation-y={-0.5}
				position-x={[-1]}
			/>

			<Html position={[-3.7, 0.3, 0]}>
				<button
					className="custom-button"
					onClick={() => {
						setIndex((index + 1) % names.length);
						setIsClicked(!isClicked);
					}}
				>
					{isClicked ? "Check out my moves" : "Impress Me!"}
				</button>
			</Html>
		</group>
	);
};

export const AvatarCanvas = () => {
	return (
		<Canvas dpr={[0, 2]}>
			<ambientLight intensity={0.5} />
			<pointLight position={[1, 1, 1]} />
			<OrbitControls enabled={false} />
			<Suspense fallback={<MyLoader />}>
				<Avatar />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
