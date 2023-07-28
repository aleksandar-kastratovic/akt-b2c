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
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
