import { Router } from 'preact-router';
import { createContext } from 'preact';

// Code-splitting is automated for `routes` directory
import Scene from '../routes/scene';

const palettes = {
	sciFi: {
		colorA: { name: "waterspout", hexValue: "#a0ffe3" },
		colorB: { name: "medium_aquamarine", hexValue: "#65DC98" },
		colorC: { name: "middle_grey", hexValue: "#8D8980" },
		colorD: { name: "independance", hexValue: "#575267" },
		colorE: { name: "dark_gunmetal", hexValue: "#222035" },
	}
}

export const Palette = createContext(palettes.sciFi);

const App = () => (
	<Palette.Provider value={palettes.sciFi}>
			<Router>
				<Scene path="/:id?" />
			</Router>
	</Palette.Provider>
)

export default App;
