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
  price: number;
}

function SearchResult({ list }: Props) {
  const [combinedList, setCombinedList] = useState<ListItem[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<ListItem[]>([]);
  const [imageUrl, setImageUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const t = useTranslations("SearchResult");
  const tCallbackForm = useTranslations("CallbackForm");

  const handleAddOrRemoveOption = (item: ListItem, e: React.MouseEvent<HTMLButtonElement>): void => {
    const optionIndex = selectedOptions.findIndex((option) => option.title === item.title);
    if (optionIndex !== -1) {
      // Если опция уже выбрана, вычтем её цену из total и удалим её из списка выбранных опций
      setTotal((prevTotal) => prevTotal - item.price);
      setSelectedOptions((prevOptions) => prevOptions.filter((option) => option.title !== item.title));
      e.currentTarget.classList.remove("active");
    } else {
      // Если опция не выбрана, добавим её цену к total и добавим её в список выбранных опций
      setTotal((prevTotal) => prevTotal + item.price);
      setSelectedOptions((prevOptions) => [...prevOptions, item]);
      e.currentTarget.classList.add("active");
    }
  };

  useEffect(() => {
    const updatedList: ListItem[] | SetStateAction<ListItem[]> = [];
    console.log(list);
    constantLinks.forEach((constantLink) => {
      // if (list.length !== 0) {
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
      // }
    });
    setCombinedList(updatedList);
    const includedDisplayLinks = ["plc.ua", "carfast.express", "vincleaner.com"]; // Add displayLink values you want to include
    const filteredList = list.filter((item) => includedDisplayLinks.includes(item.displayLink));

    const foundItemWithImage = filteredList.find((item) => item.pagemap && item.pagemap.cse_image);
    const imageSrcUrl = foundItemWithImage?.pagemap?.cse_image?.[0]?.src ?? "/car-placeholder.jpg";
    setImageUrl(imageSrcUrl);
  }, [list]);

  return (
    <div className="container flex flex-col lg:flex-row items-strength mt-6">
      <div className=" lg:w-1/2 lg:pr-16">
        <ul className="flex flex-col mb-4 transition-opacity ease-in-out transition-height" ref={listRef}>
          {combinedList.map((item) => (
            <li
              key={item.title}
              className="flex relative flex-col lg:flex-row lg:items-center lg:justify-between py-4 border-b-[1px] border-solid border-gray-200"
            >
              <div className="flex items-center justify-between mb-3 lg:mb-0">
                <Link href={item.href} key={item.title} className="flex items-center " target="_blank">
                  {item.title}
                  <svg className="w-4 h-4 ml-4">
                    <use href="/sprite.svg#external" />
                  </svg>
                </Link>
                <button
                  className="lg:absolute lg:right-[-30px] calc-btn"
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    handleAddOrRemoveOption(item, e as React.MouseEvent<HTMLButtonElement>);
                  }}
                >
                  <svg className="w-4 h-4">
                    <use href="/sprite.svg#check-calc" />
                  </svg>
                </button>
              </div>

              <div className=" flex flex-row flex-wrap justify-between items-center">
                <span className="mr-4 text-right">{t(`${item.shortTitle}.deadline`)}</span>
                <span className="text-right">{t(`${item.shortTitle}.price`)}</span>
              </div>
            </li>
          ))}
          <li className="flex relative flex-row items-center justify-between py-4 border-b-[1px] border-solid border-gray-200">
            <span>{t("totalCaption")}</span>
            <span>{total}$</span>
          </li>
        </ul>
        <button
          className="button mx-auto"
          onClick={() => {
            setOpenModal(true);
            document.body.style.overflow = "hidden";
          }}
        >
          {t("button")}
        </button>
      </div>
      <div className="lg:w-1/2 lg:ml-6 lg:order-none order-first">
        <img src={imageUrl} alt="car" className="rounded-md lg:mx-0 mx-auto lg:sticky lg:top-[100px]" />
      </div>
      <Modal selector="modal" openModal={openModal} setOpenModal={setOpenModal}>
        <CallbackForm t={tCallbackForm} vin setCloseModal={setOpenModal} />
      </Modal>
    </div>
  );
}

export default SearchResult;
