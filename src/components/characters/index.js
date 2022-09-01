// Libraries
import React, { useEffect, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import { useVirtual } from "@tanstack/react-virtual";

// Components
import CharacterDetails from "./CharacterDetails";

// Styles
import styles from "./Characters.module.scss";

const fetchCharacters = async (nextPage = 1) => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=" + nextPage
  );
  const pageData = await response.json();
  return pageData;
};

const Characters = () => {
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      "characters",
      ({ pageParam }) => fetchCharacters(pageParam),
      {
        getNextPageParam: (_lastpage) =>
          _lastpage.info.next?.split("=").slice(-1),
      }
    );

  const characters = data
    ? data.pages.flatMap((pageData) => pageData.results)
    : [];

  const parentRef = useRef();
  const rowVirtualizer = useVirtual({
    size: characters.length + (hasNextPage ? 1 : 0),
    parentRef: parentRef,
    estimateSize: useCallback(() => 300, []),
    overscan: 3,
  });
  console.log(rowVirtualizer.virtualItems);

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.virtualItems].reverse();
    if (!lastItem) {
      return;
    }
    if (
      lastItem.index >= characters.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    rowVirtualizer.virtualItems,
    characters.length,
  ]);

  return (
    <div className={styles.mainContainer} ref={parentRef}>
      <h1>All Characters</h1>
      <div
        className={styles.contentContainer}
        style={{ position: "relative", minHeight: rowVirtualizer.totalSize }}
      >
        {rowVirtualizer.virtualItems.map((virtualRow) => {
          const isLoaderRow = virtualRow.index > characters.length - 1;
          const post = characters[virtualRow.index];

          return (
            <div
              key={virtualRow.index}
              className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
              style={{
                position: "absolute",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {isLoaderRow ? (
                hasNextPage ? (
                  "Loading more..."
                ) : (
                  "Nothing more to load"
                )
              ) : (
                <CharacterDetails key={post.id} character={post} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
