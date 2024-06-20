import { useRef, useState } from "react";
import * as THREE from "three";
import ModelView from "./ModelView";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const Model = () => {
  const [size, setSize] = useState("small");

  //   camera control for model
  const cameraControlModel = useRef();

  // model
  const model = useRef(new THREE.Group());

  //   rotation
  const [modelRotation, setModelRotation] = useState(0);
  
  return (
    <div className="w-full">
      <div className="w-full h-[80vh] overflow-hidden relative">
        <ModelView
          index={1}
          groupRef={model}
          gsapType="view2"
          controlRef={cameraControlModel}
          setRotationSatate={setModelRotation}
          size={size}
        />

        <Canvas
          className="w-full h-full"
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
          eventSource={document.getElementById("root")}
        >
          <View.Port />
        </Canvas>
      </div>
    </div>
  );
};

export default Model;
