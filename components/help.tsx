import { SideBarItem } from "@/components/SideBarItem";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const people = [
    {
      name: "Willy",
      email: "willy.rosah@gmail.com",
    },
    {
      name: "Willy",
      email: "willy.rosah@gmail.com",
    },
    {
      name: "Willy",
      email: "willy.rosah@gmail.com",
    },
    {
      name: "Willy",
      email: "willy.rosah@gmail.com",
    },
  ];
  return (
    <div className="flex min-h-screen bg-green-100 p-24 flex-col">
      <main className="flex flex-1  gap-8  bg-amber-400 justify-center items-center">
        <div className="flex w-48 h-fit flex-col bg-gray-600 p-8 gap-4">
          <span className="font-semibold">Hola Manitos</span>
          <h1>My Name is Willy</h1>
          <div className="h-0.5 border border-cyan-500" />
          <button className="px-4 py-2 border border-gray-400 rounded-md">
            Tap Me Here
          </button>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>

        <SideBarItem icon="" title="PROJECTS" />
        <div className="flex w-fit h-fit flex-col bg-white p-8 gap-4 bg-primary-1">
          <ul role="list" className="p-6 divide-y divide-green-500">
            {people.map((person, idx) => (
              <li key={idx} className="flex py-4 first:pt-0 last:pb-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-slate-900">
                    {person.name}
                  </p>
                  <p className="text-sm text-slate-500 truncate">
                    {person.email}
                  </p>
                  <p className="font-sans text-[#262338] text-display-xl">
                    The future is in our hands to shape.
                  </p>

                  <p className="font-sans text-[#262338] text-display-xl-bold">
                    The future is in our hands to shape.
                  </p>

                  <p className="font-sans text-neutral-4 text-display-m">
                    The future is in our hands to shape.
                  </p>
                  <p className="font-sans text-neutral-4 text-display-s">
                    The future is in our hands to shape.
                  </p>
                  <p className="font-sans text-neutral-4 text-display-xs">
                    The future is in our hands to shape.
                  </p>
                  <p className="font-sans text-neutral-4 text-body-xl">
                    The future is in our hands to shape.
                  </p>

                  <p className="font-sans text-neutral-4 text-body-xl-bold">
                    The future is in our hands to shape.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-5 flex-wrap bg-slate-500 min-w-full">
        <button className="">Chat</button>
        <h4>No longer correct</h4>
      </footer>
    </div>
  );
}
