"use client";

import React, { useEffect, useState } from "react";

export default function List() {
  const [listedNfts, setListedNft] = useState([
    {
      type: "Quick sell",
      seller: "0x09b34766Cc24E3570b33AAE97DC45EF8Ac5B87d3",
      nft: "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
      tokenId: "0x056a6",
      startsAt: 1690823139,
      expiresAt: 1690896922,
      price: 50,
      canOffer: true,
      paymentToken: "0x0000000000000000000000000000000000000000",
      highestOffer: 30,
      stats: {
        followers: 77,
        posts: 3,
        collects: 289,
      },
    },
    {
      type: "Timed auction",
      seller: "0x09b34766Cc24E3570b33AAE97DC45EF8Ac5B87d3",
      nft: "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
      tokenId: "0x036d4v",
      startsAt: 1690540322,
      expiresAt: 1690896922,
      startingPrice: 10,
      buyNowPrice: 100,
      paymentToken: "0x0000000000000000000000000000000000000000",
      highestBid: 29,
      stats: {
        followers: 287,
        posts: 2419,
        collects: 87,
      },
    },
    {
      type: "Dutch auction",
      seller: "0x09b34766Cc24E3570b33AAE97DC45EF8Ac5B87d3",
      nft: "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
      tokenId: "0x0a6ab",
      startsAt: 1690825987,
      expiresAt:1690896922,
      startingPrice: 70,
      endingPrice: 10,
      paymentToken: "0x0000000000000000000000000000000000000000",
      stats: {
        followers: 471,
        posts: 219,
        collects: 32,
      },
    },
    {
      type: "Timed auction",
      seller: "0x09b34766Cc24E3570b33AAE97DC45EF8Ac5B87d3",
      nft: "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
      tokenId: "0x036dv",
      startsAt: 1690540322,
      expiresAt: 1690896922,
      startingPrice: 10,
      buyNowPrice: 100,
      paymentToken: "0x0000000000000000000000000000000000000000",
      highestBid: 29,
      stats: {
        followers: 287,
        posts: 2419,
        collects: 87,
      },
    },
  ]);
  const [time ,setTime] = useState(Date.now()/1000)
  const startingPrice = listedNfts[2].startingPrice as number;
  const endingPrice = listedNfts[2].endingPrice as number;
  // const pp = startingPrice - endingPrice;
  // let p = listedNfts[2].expiresAt - time / pp;
  // console.log((Math.floor(
  //   ((listedNfts[2].expiresAt - time)/((listedNfts[2].expiresAt - listedNfts[2].startsAt)/(startingPrice - endingPrice)) + endingPrice+1)
  // )))
  useEffect(() => {
    setTimeout(() => {
      setTime(Date.now()/1000 )
    }, 1000);
  }, [time]);

  return (
    <>
      {listedNfts.map((item, index) => {
        // console.log(Math.floor((time - item.startsAt) / ( (item.expiresAt - item.startsAt) / 100)))
        // console.log((item.expiresAt - item.startsAt) / 100)
        return (
          <div
            key={index}
            className=" w-60 h-60 bg-red-500 flex flex-col items-center justify-around gap-2 mt-10"
          >
            <h1>Multipotential.ETH</h1>
            <div className=" w-10/12 h-2/3 flex flex-col items-start justify-center">
              <div className="w-full h-1/2 flex items-center justify-between gap-3">
                <h2>followers</h2>
                <h2>posts</h2>
                <h2>collects</h2>
              </div>
              <div className="w-full h-1/2 flex items-center justify-between">
                <h2>{item.stats.followers}</h2>
                <h2>{item.stats.posts}</h2>
                <h2>{item.stats.collects}</h2>
              </div>
              <h2>
                price:{" "}
                {index === 2
                  ? listedNfts[2].expiresAt - time > 0? (Math.floor(((listedNfts[2].expiresAt - time)/((listedNfts[2].expiresAt - listedNfts[2].startsAt)/(startingPrice - endingPrice)) + endingPrice+1))):10
                  : item.price || item.startingPrice}
              </h2>
              <progress className=" w-full text-red-500 border-2 border-red-600 rounded-3xl h-5" value={Math.floor((time - item.startsAt) / ( (item.expiresAt - item.startsAt) / 100))} max={100}></progress>
              
              <h2>
                {Math.floor((item.expiresAt - time) / 86400) >= 0
                  ? Math.floor((item.expiresAt - time) / 86400)
                  : 0}
                  
                d{" "}
                {Math.floor(
                  ((item.expiresAt - time) % 86400) / 3600
                ) >= 0
                  ? Math.floor(
                      ((item.expiresAt - time) % 86400) / 3600
                    )
                  : 0}
                h{" "}
                {Math.floor(
                  (((item.expiresAt - time) % 86400) % 3600) /
                    60
                ) >= 0
                  ? Math.floor(
                      (((item.expiresAt - time) % 86400) %
                        3600) /
                        60
                    )
                  : 0}
                m{" "}
                {Math.floor(
                  ((((item.expiresAt - time) % 86400) % 3600) %
                    60) /
                    1
                ) >= 0
                  ? Math.floor(
                      ((((item.expiresAt - time) % 86400) %
                        3600) %
                        60) /
                        1
                    )
                  : 0}
                s{" "}
              </h2>
            </div>
          </div>
        );
      })}
    </>
  );
}
