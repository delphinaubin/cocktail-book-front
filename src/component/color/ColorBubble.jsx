import { Tag } from 'antd';
import React from 'react';
import ColorShape from '../../shape/ColorShape';


const ColorBubble = ({ color }) => (
  <Tag
    color={color.value}
    style={{ color: color.textColor || '#FFF' }}
  >
    {color.name}
  </Tag>
);

ColorBubble.propTypes = {
  color: ColorShape.isRequired,
};

export default ColorBubble;
