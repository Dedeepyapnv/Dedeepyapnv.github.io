import React from 'react';
import Link from 'next/link';



export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">
				<small>

					<Link href="https://in.linkedin.com/in/dedeepya-padmanabhuni">
						<a className="text-muted text-decoration-none">
							Dedeepya Padmanabhuni - <u>LinkedIn</u>
						</a>
					</Link>
				</small>
			</div>
		</footer>
	);
}