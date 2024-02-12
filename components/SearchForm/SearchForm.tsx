"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

function SearchForm() {
  const [searchResults, setSearchResults] = useState<any | []>([]);
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
    }).then((res) => {
      return res.json();
    });

    if (response.items.length > 0) setSearchResults(response.items);
  };

  return (
    <>
      <form
        className="flex flex-row "
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input type="text" placeholder="Ввидите VIN номер" required name="search-string" className="input !mb-0" />
        <button type="submit" className="button">
          {t("submitSearch")}
        </button>
      </form>

      {searchResults.length > 0 && (
        <div className="flex flex-col">
          <h3>{t("searchResults")}</h3>
          {searchResults.map((item: any, index: number) => {
            return (
              <div key={index} className="flex flex-row">
                <Link href={item.link}>{item.displayLink}</Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default SearchForm;
