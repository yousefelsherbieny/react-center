import { AvatarCanvas } from "./AvatarCanvas";

const Hero = () => {
	return (
		<section className="hero-section position-relative w-100 vh-100 mx-auto">
			<div className="container px-3 position-absolute top-50 start-50 translate-middle">
				{/*  Message */}
				<div>
					<h1 className="text-white display-1 fw-bold">
						Hi, I'm <span className="text-primar">Yousef</span>
					</h1>
					<p className="d-none d-sm-block fs-4 mt-4 text-white w-75">
						My code is so clean, my keyboard has never needed a
						shower.
						<br />
						So come on in, explore a little, and let's make some
						magic together!
					</p>
				</div>
			</div>

			<AvatarCanvas />
		</section>
	);
};

export default Hero;
