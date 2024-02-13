"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SetStateAction, useEffect, useState, useRef } from "react";
import { constantLinks } from "./constantLinks";
import Image from "next/image";
import { Modal } from "components/Modal";
import { CallbackForm } from "components/CallbackForm";
interface ListItemProps {
  displayLink: string;
  title: string;
  link: string;
  cacheId: string;
  pagemap?: {
    cse_image?: [
      {
        src: string;
      }
    ];
  };
  // Add other properties if available
}

interface Props {
  list: ListItemProps[];
}

interface ListItem {
  title: string;
  shortTitle: string;
  href: string;
}

function SearchResult({ list }: Props) {
  const [combinedList, setCombinedList] = useState<ListItem[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const t = useTranslations("SearchResult");
  const tCallbackForm = useTranslations("CallbackForm");

  useEffect(() => {
    const updatedList: ListItem[] | SetStateAction<ListItem[]> = [];
    console.log(list);
    constantLinks.forEach((constantLink) => {
      if (list.length !== 0) {
        const listItem = list.find((item) => item.displayLink === constantLink.title);
        if (listItem) {
          const updatedListItem: ListItem = {
            ...constantLink,
            title: listItem.displayLink,
            href: listItem.link, // Add the missing href property
          };
          updatedList.unshift(updatedListItem);
        } else {
          updatedList.push(constantLink);
        }
      }
    });
    setCombinedList(updatedList);
    const foundItemWithImage = list.find((item) => item.pagemap && item.pagemap.cse_image);
    const imageSrcUrl = foundItemWithImage?.pagemap?.cse_image?.[0]?.src ?? "/car-placeholder.jpg";
    setImageUrl(imageSrcUrl);
  }, [list]);

  return (
    <div className="container flex items-start">
      <div className="w-1/2 mr-16">
        <ul className="flex flex-col mb-4 transition-opacity ease-in-out transition-height" ref={listRef}>
          {combinedList.map((item) => (
            <li
              key={item.title}
              className="flex items-center justify-between py-4 border-b-[1px] border-solid border-gray-200"
            >
              <Link href={item.href} key={item.title} className="flex items-center" target="_blank">
                {item.title}
                <svg className="w-4 h-4 ml-4">
                  <use href="/sprite.svg#external" />
                </svg>
              </Link>
              <div>
                <span className="mr-4">{t(`${item.shortTitle}.deadline`)}</span>
                <span>{t(`${item.shortTitle}.price`)}</span>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="button"
          onClick={() => {
            setOpenModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          {t("button")}
        </button>
      </div>
      <div className="w-1/2 ml-6">
        <img src={imageUrl} alt="car" className="rounded-sm" />
      </div>
      <Modal selector="modal" openModal={openModal} setOpenModal={setOpenModal}>
        <CallbackForm t={tCallbackForm} vin />
      </Modal>
    </div>
  );
}

export default SearchResult;
