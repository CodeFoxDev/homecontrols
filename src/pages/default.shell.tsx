import type { element, attrs } from "xite";

export function shell(page: attrs): element {
  return (
    <>
      <nav>Navbar</nav>
      <main>
        {page}
      </main>
    </>
  )
}