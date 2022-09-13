import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";

const Login = () => {
	return (
		<div className="auth-page" style={{ minHeight: "100vh" }}>
			<div className="row flex-mc" style={{ paddingTop: "8rem" }}>
				<div className="col-lg-6  offset-lg-3 shadow rounded py-5 px-5 bg-white">
					<h1>Connexion</h1>
					<form action="" className="row mt-3">
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
			</div>
		</div>
	);
};

export default Login;
