import { Title } from "../components/title";
import { SubTitle } from "../components/subtitle";
import { Button } from "../components/button";

export default function Home() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between p-60 w-full h-full bg-dnd-bg bg-cover"
      }
    >
      <div className="text-center">
        <Title>Bem-vindo</Title>
        <SubTitle className="mt-4">Vamos iniciar a sua jornada?</SubTitle>
      </div>
      <Button pathName={"/question/1"} number={1}>
        Iniciar
      </Button>
    </main>
  );
}
