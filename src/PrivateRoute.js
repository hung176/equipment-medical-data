import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getAuth } from "./store";

export default function PrivateRoute({ children, layout: Layout, ...rest }) {
	const { isAuthenticated } = useSelector(getAuth);
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated ? (
					<>
						<Layout />
						{children}
					</>
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				)
			}
		/>
	);
};