import 'preact';
import { useContext } from 'preact/hooks';
import { Palette } from '../../app';


const styles = {
  position: 'absolute',
}

type Bounds = {
  width: number;
  height: number;
}

type SVGBorderProps = {
  bounds: Bounds;
  outerStrokeWidth: number;
  innerStrokeWidth: number;
  fillCorner?: boolean;
}

const roundedEdgeBoxPath = (bounds: Bounds, edgeOffset: number, borderRadius: number) => {
  const path = `M0,0
                M${edgeOffset},${borderRadius}
                Q${edgeOffset},${edgeOffset} ${borderRadius}, ${edgeOffset}
                L${bounds.width - borderRadius}, ${edgeOffset}
                Q${bounds.width - edgeOffset},${edgeOffset} ${bounds.width - edgeOffset},${borderRadius}
                L${bounds.width - edgeOffset},${bounds.height - borderRadius}
                Q${bounds.width - edgeOffset},${bounds.height - edgeOffset} ${bounds.width - borderRadius},${bounds.height - edgeOffset}
                L${borderRadius},${bounds.height - edgeOffset}
                Q${edgeOffset},${bounds.height - edgeOffset} ${edgeOffset},${bounds.height - borderRadius}
                Z
              `
  return path;
}

export const SVGBorder = ({ bounds, outerStrokeWidth, innerStrokeWidth, fillCorner }: SVGBorderProps) => {
  const palette = useContext(Palette);
  console.log(palette);
  const edgeOffset = outerStrokeWidth / 2;
  const borderRadius = outerStrokeWidth * 2;

  const innerEdgeOffset = outerStrokeWidth + (innerStrokeWidth / 2) - 1;

  let cornerPath = "";
  if (fillCorner) {
    cornerPath = `M0,0 L${borderRadius},0 L0,${borderRadius}
                  M${bounds.width},0 L${bounds.width - borderRadius},0 L${bounds.width},${borderRadius}
                  M${bounds.width},${bounds.height} L${bounds.width - borderRadius},${bounds.height} L${bounds.width},${bounds.height - borderRadius}
                  M0,${bounds.height} L${borderRadius},${bounds.height} L0,${bounds.height - borderRadius}`;
  }
  return (
    <svg
      style={styles}
      viewBox={`0 0 ${bounds.width} ${bounds.height}`}
      width={bounds.width}
      height={bounds.height}
      >
        <g
          stroke={`${palette.colorD.hexValue}`}
          fill="none"
          stroke-width={outerStrokeWidth}
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={roundedEdgeBoxPath(bounds, edgeOffset, borderRadius)}
          />
          <path vectorEffect={'non-scaling-stroke'} d={cornerPath} fill={palette.colorD.hexValue} stroke-width="1" />
        </g>
        <g
          stroke={`${palette.colorA.hexValue}`}
          fill="none"
          stroke-width={innerStrokeWidth}
        >
          <path
            vectorEffect="non-scaling-stroke"
            d={roundedEdgeBoxPath(bounds, innerEdgeOffset, borderRadius)}
          />
        </g>

    </svg>
  )
}