import * as React from "react";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="tasks" element={<Tasks />} />
					<Route path="rating" element={<Rating />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}