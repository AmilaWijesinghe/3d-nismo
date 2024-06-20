import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    // group different lights and lightformers. We can use group to organize lights, cameras, meshes, and other objects in the scene.
    <group name="lights">
      {/**
       * @description Environment is used to create a background environment for the scene
       * https://github.com/pmndrs/drei?tab=readme-ov-file#environment
       */}
      <Environment resolution={256}>
        <group>
          {/**
           * @description Lightformer used to create custom lights with various shapes and properties in a 3D scene.
           * https://github.com/pmndrs/drei?tab=readme-ov-file#lightformer
           */}
          <Lightformer
            form="rect"
            intensity={5}
            position={[-1, 0, -10]}
            scale={15}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[-80, 2, 1]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={5}
            position={[60, -6, 10]}
            scale={15}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>

      {/**
       * @description spotLight is used to create a light source positioned at a specific point
       * in the scene that emits light in a specific direction.
       * https://threejs.org/docs/#api/en/lights/SpotLight
       */}
      <spotLight
        position={[-5, 20, 5]}
        angle={0.15}
        penumbra={1} // the penumbra is the soft edge of a shadow cast by a point light
        decay={0} // the amount the light dims as it moves away from the source
        intensity={Math.PI * 0.2} // the light intensity
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, -20, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI * 0.2}
        color={"#f8f9fa"}
      />
      <spotLight
        position={[0, 8, 5]}
        angle={0.2}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
      <spotLight
        position={[12, 30, 8]}
        angle={0.8}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 3}
      />
      <spotLight
        position={[-10, 1, 3]}
        angle={0.8}
        penumbra={1}
        decay={0.1}
        intensity={Math.PI * 1.5}
      />
    </group>
  );
};

export default Lights;
