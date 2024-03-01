import { Text } from "@react-three/drei";

function TextDrei({text, size}: any) {
    const jost = '/assets/fonts/Jost-VariableFont_wght.ttf';
  return (
    <Text color="white" anchorX="center" anchorY="middle" fontSize={size} letterSpacing={-0.025} font={jost}>
      {text}
    </Text>
  );
}

export default TextDrei;
