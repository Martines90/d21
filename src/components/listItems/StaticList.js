import React from 'react';
import { Text } from 'react-native';

const StaticList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <><Text style={{ lineHeight: 20 }} key={item.key}>{item.text}{"\n"}</Text></>
        );
      })}
    </>
  );
}

export default StaticList