# Bibi Blocksberg on Spotify

a simple NextJS app
## get the source data

- make dev account for api access on spotify
- 2YlvvdXUqRjiXmeL2GRuZ9 is "Holmes's Spotify Artist ID"
- visit https://developer.spotify.com/console/get-artist-albums/ then scroll around until you find the "try it" button, it will generate a key, which in turn allows you to curl what you need (pipe to file :wink:)

## extract json using JSONata

``` jsonata
{
    "items": $sort(items[$contains(name, 'Die Originale')].{
        "name": name,
        "uri": uri,
        "images": images,
        "spotifyUrl": external_urls.spotify,
        "case": $number($split($match(name, /[Folge|Fall] \d+/).match, " ")[-1])
    }, function($l, $r) {
        $l.case > $r.case
    }
    )
}
```

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
