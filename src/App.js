/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
import { React, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import './App.css';

// eslint-disable-next-line react/prop-types
export function Furniture1({ isOpen, ...props }) {
  const { nodes, materials } = useGLTF('/assets/furniture1.glb');
  const variants = {
    open: {
      rotateX: (0 * Math.PI) / 180,
      x: -0.03,
      y: 111.69,
      z: 2.84,
    },
    closed: {
      rotateX: (105 * Math.PI) / 180,
      x: 0,
      y: 75,
      z: 39,
    },
  };
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 20, 0, 0]} scale={0.03}>
        <motion.group
          position={[-0.03, 111.69, 2.84]}
          scale={3.37}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          variants={variants}
        >
          <mesh
            geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
            material={materials.Base}
            position={[0.01, -33.13, 0.84]}
            scale={30.31}
          />
        </motion.group>
      </group>
    </group>
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <div className="preview">
        <Canvas>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 50]} />
          <Furniture1 isOpen={isOpen} />
          <PerspectiveCamera makeDefault position={[0, 2, 15]} />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="footer">
        <label className="switch">
          <input
            type="checkbox"
            checked={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <span className="slider"> </span>
        </label>
      </div>
    </div>
  );
}

export default App;
