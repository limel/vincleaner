"use client";
import { useTranslations } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { SearchResult } from "components/SearchResult";

function SearchForm() {
  const [searchResultList, setSearchResultsList] = useState<any | []>([]);
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("SearchForm");
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    let searchStr = "";
    formData.forEach((value, key) => {
      if (key === "search-string") {
        searchStr = value as string;
      }
    });
    const response = await fetch(`/api/search?vin=${searchStr}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        searchString: "searchStr",
      },
    }).then((res) => res.json());

    console.log(response);
    if (response.items.length > 0) setSearchResultsList(response.items);
  };

  useEffect(() => {
    function handleIndents() {
      const container = document.querySelector(".container") as HTMLDivElement;
      const containerComputedStyle = getComputedStyle(container);
      const containerMargin = containerComputedStyle.marginLeft;
      const containerPadding = containerComputedStyle.paddingLeft;

      if (leftContainerRef.current && rightContainerRef.current) {
        leftContainerRef.current.style.paddingLeft = `calc(${containerPadding} + ${containerMargin} )`;
        rightContainerRef.current.style.paddingRight = `calc(${containerPadding} + ${containerMargin} )`;
        // rightContainerRef.current.style.paddingRight = containerPadding;
      }
    }

    handleIndents();

    window.addEventListener("resize", handleIndents);

    return () => {
      window.removeEventListener("resize", handleIndents);
    };
  }, [leftContainerRef, rightContainerRef]);

  return (
    <>
      <div className="flex lg:flex-row items-stretch border-solid border-y-2 border-accent">
        <div className=" bg-accent text-white w-1/2 py-16 pr-16" ref={leftContainerRef}>
          <h2 className="mb-5">ПОИСК АВТОМОБИЛЯ ПО VIN НА САЙТАХ И В GOOGLE</h2>
          <p className="before:h-full before:w-[2px] before:bg-white pl-3 relative before:left-0 top-0 before:absolute">
            Получите полный список всех сайтов, на которых размещен ваш автомобиль, а также детальную стоимость услуг за
            удаление.
          </p>
        </div>
        <form
          ref={rightContainerRef}
          className="flex flex-row w-1/2 h-fit mt-auto mb-auto pl-6"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input type="text" placeholder="Ввидите VIN номер" required name="search-string" className="input !mb-0" />
          <button type="submit" className="button">
            {t("submitSearch")}
          </button>
        </form>
      </div>
      {searchResultList.length > 0 && <SearchResult list={searchResultList} />}
      {/* <SearchResult list={searchResultList} /> */}
    </>
  );
}

export default SearchForm;
