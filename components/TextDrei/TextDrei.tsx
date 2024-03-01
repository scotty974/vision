import { Text } from "@react-three/drei";

function TextDrei() {
    const jost = '/assets/fonts/Jost-VariableFont_wght.ttf';
  return (
    <Text color="white" anchorX="center" anchorY="middle" fontSize={5} letterSpacing={-0.025} font={jost}>
      Vision Agency
    </Text>
  );
}

export default TextDrei;
