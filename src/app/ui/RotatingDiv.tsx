import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export function RotatingDiv() {
  const rigidBody = useRef();

  useFrame((state) => {
    if (rigidBody.current) {
      // Apply a small upward force to simulate low gravity
      rigidBody.current.applyImpulse({ x: 0, y: 0.01, z: 0 });

      // Add a bit of rotation
      rigidBody.current.addTorque({ x: 0, y: 0.001, z: 0 });

      // Keep the object within bounds
      const position = rigidBody.current.translation();
      if (Math.abs(position.y) > 3) {
        rigidBody.current.setTranslation({ x: position.x, y: position.y * -0.9, z: position.z });
      }
    }
  });

  return (
    <RigidBody ref={rigidBody} linearDamping={0.95} angularDamping={0.95}>
      <Center>
        <Text3D font="/Space_Mono_Regular.json" size={0.5}>
          {'<div>'}
          <meshStandardMaterial color='orange' />
        </Text3D>
      </Center>
    </RigidBody>
  );
}
