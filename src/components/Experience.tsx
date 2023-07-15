import { Head } from "./Head";

function Experience() {
  return (
    <>
      <ambientLight color="orange" intensity={0.1} />
      <pointLight position={[10, 10, 10]} color="pink" />
      <Head />
    </>
  );
}
export default Experience;
