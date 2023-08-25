import {G, Mask, Path, Svg, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  fill: string;
}

const CustomSCheduleSVG: React.FC<Props> = ({fill, ...rest}) => {
  return (
    <Svg {...rest} viewBox="0 0 25 25" fill="none">
      <Mask
        id="mask0_477_4204"
        maskUnits="userSpaceOnUse"
        x="1"
        y="2"
        width="23"
        height="20">
        <Path
          d="M21.6666 5.5H3.66663C3.11434 5.5 2.66663 5.94772 2.66663 6.5V19.5C2.66663 20.0523 3.11434 20.5 3.66663 20.5H21.6666C22.2189 20.5 22.6666 20.0523 22.6666 19.5V6.5C22.6666 5.94772 22.2189 5.5 21.6666 5.5Z"
          fill="white"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M7.66663 3.5V7.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <Path
          d="M13.1666 12H7.66663M17.6666 16H7.66663"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
        />
        <Path
          d="M17.6666 3.5V7.5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </Mask>
      <G mask="url(#mask0_477_4204)">
        <Path d="M0.666626 0.5H24.6666V24.5H0.666626V0.5Z" fill={fill} />
      </G>
    </Svg>
  );
};

export default CustomSCheduleSVG;
