import Image from "next/image";
import Button from "./Components/Button";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-24 ">
        <div className="space-y-3 border-2 border-white p-5">
          <Button intent={"primary"}>Primary</Button>
          <Button intent={"outline"}>OUTLINE</Button>
          <Button intent={"destructive"}>DESTRUCTIVE</Button>
          <Button>SECONDARY</Button>
          <Button>GHOST</Button>
          <Button>LINK</Button>
        </div>
      </main>
    </>
  );
}
