import style from './style.scss';
import { Context, Fragment } from 'preact';
import { SVGBorder } from '../../components/svg/border/';
import { Palette } from '../../components/app';
import { useContext } from 'preact/hooks';

type SceneIds = keyof {
	default: "",
	left: "",
}

type SceneProps = {
	path: string;
	id?: SceneIds;
}

const getScene = (id: SceneIds, palette: any) => {
	const colorB = palette.colorB.hexValue;
	const scenes = {
		default: 
			<Fragment>
				<SVGBorder
					bounds={{ width:1920, height:1080 }}
					outerStrokeWidth={25}
					innerStrokeWidth={2}
					fillCorner={true}
				/>
				<div
					class={style.label}
					style={{ color: palette.colorE.hexValue, textShadow: `5px 0px ${colorB}, -5px 0px ${colorB}, 0px 5px ${colorB}, 0px -5px ${colorB}` }}
				>Radet 5</div>
				<div style={{ width:1920/4, height:1080/4, position:"fixed", right: "50px", bottom: "50px" }}>
					<SVGBorder
						bounds={{ width:1920/4, height:1080/4 }}
						outerStrokeWidth={5}
						innerStrokeWidth={2}
					/>
				</div>
			</Fragment>,
		left:
			<Fragment>
				<SVGBorder
					bounds={{ width:1920, height:1080 }}
					outerStrokeWidth={25}
					innerStrokeWidth={2}
					fillCorner={true}
				/>
				<div style={{ width:1920*0.60, height: 1080*0.60, marginLeft: 1920*0.35, marginTop: 1080*0.10 }}>
				<SVGBorder
					bounds={{ width:1920*0.60, height:1080*0.60 }}
					outerStrokeWidth={15}
					innerStrokeWidth={2}
				/>
				</div>
				<div
					class={style.label}
					style={{ color: palette.colorE.hexValue, textShadow: `5px 0px ${colorB}, -5px 0px ${colorB}, 0px 5px ${colorB}, 0px -5px ${colorB}` }}
				>Radet 5</div>
				<div style={{ width:1920*0.30, height:1080*0.30, position:"fixed", left: "50px", bottom: "100px" }}>
					<SVGBorder
						bounds={{ width:1920*0.30, height:1080*0.30 }}
						outerStrokeWidth={5}
						innerStrokeWidth={2}
					/>
				</div>
			</Fragment>,
	};
	return scenes[id];
}

const Scene = ({ path, id }: SceneProps) => {
	const palette = useContext(Palette);
	const sceneKey = id || "default";
	return (
		<div class={style.scene}>
			{getScene(sceneKey, palette)}
		</div>
	);
};

export default Scene;
