import { Select } from 'antd';
import React from 'react';
import { colorsTable } from '../../data/colors';
import ColorBubble from './ColorBubble';

const { Option } = Select;

const ColorSelect = (props) => {
  const { style, ...propRest } = props;
  return (
    <Select
      placeholder="color"
      style={{ width: '100%', marginTop: '1rem', style }}
      {...propRest}
    >
      {
        colorsTable.map(color => (
          <Option key={color.id}>
            <ColorBubble color={color} />
          </Option>))
      }
    </Select>
  );
};

ColorSelect.defaultProps = {
  style: {},
};

export default ColorSelect;
