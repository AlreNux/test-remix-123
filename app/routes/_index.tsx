import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "TEST-REMIX-ONSKY TITLE" },
    { name: "description", content: "TEST-REMIX-ONSKY CONTENT" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">TEST-REMIX-ONSKY bla bla bla</h1>
    </div>
  );
}
