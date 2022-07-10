import React from "react";

function Carousel() {
	return (
		<section className="carousel-container">
			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://picsum.photos/205/300"
							className="d-block w-100"
							alt="..."
							height="600px"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>
								Some representative placeholder content for the
								first slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="https://picsum.photos/202/300"
							className="d-block w-100"
							alt="..."
							height="600px"
							style={{ objectFit: "cover" }}
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>
								Some representative placeholder content for the
								second slide.
							</p>
						</div>
					</div>
					<div className="carousel-item">
						<img
							src="https://picsum.photos/200/300"
							className="d-block w-100"
							alt="..."
							height="600px"
						/>
						<div className="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>
								Some representative placeholder content for the
								third slide.
							</p>
						</div>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleCaptions"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
				</button>
			</div>
		</section>
	);
}

export default Carousel;
