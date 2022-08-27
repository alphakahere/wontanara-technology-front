import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

const Login = () => {
	return (
		<div className="auth-page">
			<div className="row">
				<div className="col-lg-6 col-xl-5 pt-5 px-5">
					<h1>Connexion</h1>
					<form action="">
						<div className="col-12 mb-3">
							<Input label="Email" type="email" id="email" />
						</div>
						<div className="col-12 mb-3">
							<Input
								label="Mot de passe"
								type="password"
								id="password"
							/>
						</div>
						<div className="btn-container">
							<Button label="Se connecter" width="w-100" />
						</div>
						<div className="mt-4">
							<Link to="/forget-password" className="app_link">
								Mot de passe oublié?
							</Link>
						</div>
						<div className="flex-sb">
							<p>Pas encore de compte?</p>
							<Link to="/forget-password" className="app_link">
								S'inscrire
							</Link>
						</div>
					</form>
				</div>
				<div className="col-lg-6 col-xl-7"></div>
			</div>
		</div>
	);
};

export default Login;
