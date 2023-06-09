This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Production version hosted at https://clerkie-demo.vercel.app/.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Resources and Libraries

[Tailwind CSS](https://tailwindcss.com/)

[React Icons](https://react-icons.github.io/react-icons)

[PokeApi](https://pokeapi.co/)

[SWR](https://swr.vercel.app/)

[react-bottom-scroll-listener](https://github.com/karl-run/react-bottom-scroll-listener#readme)

## UX and Architecture

Navigate to **Friends**. Loading skeletons are displayed during initial fetch. Once initial batch is loaded, scrolling to bottom of screen automatically fetches another 10 results. Loading state utilized when more results are being fetched. Utilize filter menu to filter results.

To view sample friend info view, click one of the friend items. All content is static, except "Friend ID" in header breadcrumbs. Value corresponds to index of item in data array.

Web app is responsive - component sizes adjust for smaller screen sizes and navigation drawer switches to overlay mode.

### What the heck is Pokemon?

The `/pages/pokemon` directory exists simply to demonstrate a better method of fetching data from an external API. The React component hosted at `/friends` does not cache any data and re-fetches data from a simple Promise written directly in the code. The component at `/pokemon`, on the other hand, utilizes a custom hook that wraps around `useSWR`. If this project were using a real API, my preferred approach would be to utilize a HTTP caching method.
