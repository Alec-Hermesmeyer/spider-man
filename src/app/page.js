/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8DUSLgXyLKH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <GamepadIcon className="h-6 w-6" />
          <span className="sr-only">Jack's Favorites</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Video Games
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Adventures
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
        </nav>
      </header>
      <main className="w-full flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 bg-gradient-to-r from-[#ffa500] to-[#ff6b6b]">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">Nox's Favorite Things</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join 5-year-old Nox as he shares his love for video games and outdoor adventures!
                </p>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="Nox"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section id="games" className="w-full flex items-center justify-center py-12 sm:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Video Games
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nox's Favorite Games</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From platformers to open-world adventures, these are the games that keep Nox entertained for hours on
                  end.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Game 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Super Mario Odyssey</h3>
                  <p className="text-muted-foreground">
                    Nox loves exploring the vibrant worlds and collecting all the moons in this classic 3D platformer.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Game 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Minecraft</h3>
                  <p className="text-muted-foreground">
                    Nox loves the endless possibilities of Minecraft, where he can build, explore, and survive in a
                    blocky world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="adventures" className="w-full flex items-center justify-center py-12 sm:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Adventures
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nox's Outdoor Explorations</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From hiking in the woods to playing in the park, Nox loves spending time outdoors and going on new
                  adventures.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Adventure 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Hiking in the Woods</h3>
                  <p className="text-muted-foreground">
                    Nox loves exploring the trails and spotting wildlife in the nearby forest.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Adventure 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Playing at the Park</h3>
                  <p className="text-muted-foreground">
                    Nox loves running around the playground, swinging on the swings, and making new friends at the
                    local park.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full flex items-center justify-center py-12 sm:py-24 lg:py-32 bg-blue-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  About
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Nox</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nox is a 5-year-old boy who loves video games and outdoor adventures. He's always eager to try new
                  things and share his favorite experiences with others.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Nox"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">About Nox</h3>
                  <p className="text-muted-foreground">
                    Nox is a curious and energetic 5-year-old who loves exploring the world around him. When he's not
                    playing his favorite video games, you can find him hiking in the woods, playing at the park, or
                    making new friends.
                  </p>
                  <p className="text-muted-foreground">
                    He's always eager to share his latest adventures and discoveries, and he hopes to inspire other kids
                    to get outside and have fun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Nox's Favorites. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Use
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}