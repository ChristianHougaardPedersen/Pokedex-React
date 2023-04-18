import { Outlet } from "react-router-dom"

export default function About() {
    return (
      <>
        <h1 className="text-3xl font-bold underline text-center">
        This is the about page!
      </h1>
      <Outlet />
      </>
    )
}