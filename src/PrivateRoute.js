import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, layout: Layout, ...rest }) {
	const isAuthenticated = true;
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