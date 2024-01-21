import "./GoogleButton.css";

export const GoogleButton = () => {
	return (
		<button className="googlebutton">
			<div className="googlebutton-inside">
				<img
					className="profile-img"
					src="https://lh3.googleusercontent.com/a/ACg8ocKGfTab6s2MpEIlwCe9E_Fr7zZ1JEW6kZU07NCVwdxD33U=s96-c"
					alt="Brady profile pic"
				/>
				<div className="sign-in-as">
					<span className="top">Sign in as Brady</span>
					<span className="bottom">bradyjstacey@gmail.com</span>
				</div>
				<img
					className="google-logo"
					src="https://banner2.cleanpng.com/20180521/ers/kisspng-google-logo-5b02bbe1d5c6e0.2384399715269058258756.jpg"
					alt="google logo"
				/>
			</div>
		</button>
	);
};
