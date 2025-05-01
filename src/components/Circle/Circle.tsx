import { FunctionComponent, memo } from 'react';

import './Circle.css';

interface CircleProps {
	size: string;
	color: string;
   empty?: boolean;
   pointer?: boolean;
   onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Circle: FunctionComponent<CircleProps> = ({ size, color, empty = false, pointer, onClick }) => {
   let style;
   if (empty) {
      style = {
         width: size,
         border: `2px solid ${color}`,
         background: 'transparent',
         cursor: pointer ? 'pointer' : 'default',
      }
   } else {
      style = {
         width: size,
         background: color,
         cursor: pointer ? 'pointer' : 'default',
      }
   }

	return <div className="Circle" style={style} onClick={onClick}></div>;
};

export default memo(Circle);
