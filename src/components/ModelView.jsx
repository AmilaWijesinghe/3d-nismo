import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import * as THREE from "three";

import Lights from "./Lights";
import { Suspense } from "react";
import ModelCarR35 from "./ModelCarR35";

const ModelView = ({ index, gsapType, controlRef, setRotationState }) => {
  return (
    <View index={index} id={gsapType} className={`w-full h-full absolute right-16`}>
      {/* {aAmbient loght} */}
      <ambientLight intensity={0.2} />
      <hemisphereLight intensity={0.1} />
      <pointLight intensity={3} />

      <PerspectiveCamera makeDefault position={[0.5, 3, 8]} />
      <Lights />

      <OrbitControls
        makeDefault
        autoRotate
        panSpeed={0.8}
        autoRotateSpeed={2}
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        rotation={[-0.5, -0.5, 80]}
        target0={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngel())}
      />



      <Suspense fallback={null}>
        <ModelCarR35 scale={[1.55, 1.55, 1.55]} />
      </Suspense>
    </View>
  );
};

export default ModelView;
