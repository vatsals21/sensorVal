import React, {useState} from 'react';
import {Text} from 'react-native';
// import {useAnimatedSensor, SensorType} from 'react-native-reanimated';
import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';
import {map, filter} from 'rxjs/operators';

const SensorInfo = () => {
  const [val, setVal] = useState({x: 0, y: 0, z: 0});

  // accelerometer.subscribe(({x, y, z}) => setVal({x, y, z}));
  setUpdateIntervalForType(SensorTypes.accelerometer, 2000);
  accelerometer.subscribe(({x, y, z}) => {
    console.log(`${x} ${y} ${z}`);
    setVal({x, y, z});
  });
  return <Text>{`${val.x} ${val.y} ${val.z} `}</Text>;
};

export default SensorInfo;
