import Button from "./Components/Button";
import ThemeChanger from "./Components/Ui/ThemeChanger ";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-24">
        <ThemeChanger />
        <div className="flex items-center flex-wrap justify-center space-x-2  border-2 border-white p-5 mb-2">
          <Button intent={"primary"} size={"xs"}>
            Primary
          </Button>
          <Button intent={"outline"} size={"sm"}>
            {" "}
            OUTLINE
          </Button>
          <Button rounded={"full"} intent={"destructive"} size={"base"}>
            DESTRUCTIVE
          </Button>
          <Button rounded={"2xl"} size={"lg"}>
            SECONDARY
          </Button>
        </div>
        <Button fullWidth size={"lg"}>
          SECONDARY
        </Button>
      </main>
    </>
  );
}
