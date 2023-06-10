import { Title } from "../../../components/title";
import { SubTitle } from "../../../components/subtitle";
import { Button } from "../../../components/button";
import { Options } from "../../../components/options";

export default function Question({ params }) {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between p-60 w-full h-full bg-dnd-bg bg-cover"
      }
    >
      <Title className="">{params.number}</Title>
      <Options />

      {/* <Button onClick={() => console.log("Teste")}>Proxima</Button> */}
    </main>
  );
}
