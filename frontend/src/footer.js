import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className = "container">
    <footer id="footer">
		<div className="company-details">
			<div className="row">
				<div id="col1">
					<span id="icon" className="fa fa-map-marker"></span>

					<span>
						Address : 
                        <br /> P4X9+Q8X, Bawana Rd, Delhi Technological University, Shahbad Daulatpur Village, 
						Rohini, New Delhi, Delhi, 110042
					</span>
				</div>

				<div id="col2">
					<span id="icon" className="fa fa-phone"></span>

					<span>
						Telephone: +91-9643654899
					</span>
				</div>

				<div id="col3">
					<span id="icon" className="fa fa-envelope"></span>
					<span>Email: ekanshbhushan@gmail.com</span>
				</div>
			</div>
		</div>

		<div className="copyright">
			<p>© All rights reserved | StartupX</p>

			<ul className="contact">
				<li>
					<a href="https://in.pinterest.com/ekanshbhushan/" className="fa fa-twitter">
                        pinterest
					</a>
				</li>

				<li>
					<a href="https://www.linkedin.com/in/ekansh-bhushan-2a14b62a5/?originalSubdomain=in" className="fa fa-facebook">
                    linkedin
					</a>
				</li>
			</ul>
		</div>
	</footer>
    </div>
  )
}

export default Footer;