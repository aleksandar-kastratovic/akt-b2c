import { notFound } from "next/navigation";
export default function NotFoundd() {
  if (notFound) {
    return (
      <>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </>
    );
  }
  return (
    <div className="container flex justify-center items-center">
      <h1 className="text-center">Not Found</h1>
      <p className="text-center">Could not find requested resource</p>
    </div>
  );
}
