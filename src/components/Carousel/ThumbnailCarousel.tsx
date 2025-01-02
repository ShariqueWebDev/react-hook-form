"use client";
import { useState } from "react";
import styles from "./ThumbCarousel.module.css"; // Import styles

type OpenMenusProps = Record<string, boolean>;
type ProductSlideImageProps = string[];
interface MenuItemProps {
  id: string;
  label: string;
  children?: MenuItemProps[];
}

const ThumbCarousel = ({ images }: { images: ProductSlideImageProps }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //////////////////////////
  const [openMenus, setOpenMenus] = useState<OpenMenusProps>({});

  const toggleMenu = (menuId: any): void => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId], // Toggle the specific menu
    }));
  };

  // ??????????????????????????????????????????????????
  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  // fjaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd;
  const menuItems: MenuItemProps[] = [
    {
      id: "1",
      label: "Menu 1",
      children: [
        {
          id: "1-1",
          label: "Submenu 1-1",
          children: [
            {
              id: "1-1-1",
              label: "Submenu 1-1-1",
              children: [
                { id: "1-1-1", label: "Submenu 1-1-1" },
                {
                  id: "1-1-2",
                  label: "Submenu 1-1-2",
                  children: [
                    { id: "1-1-1", label: "Submenu 1-1-2-1" },
                    {
                      id: "1-1-2",
                      label: "Submenu 1-1-2",
                      children: [
                        {
                          id: "1-1-1",
                          label: "Submenu 1-1-1",
                          children: [
                            { id: "1-1-1", label: "Submenu 1-1-1" },
                            { id: "1-1-2", label: "Submenu 1-1-2" },
                          ],
                        },
                        { id: "1-1-2", label: "Submenu 1-1-2" },
                      ],
                    },
                  ],
                },
              ],
            },
            { id: "1-1-2", label: "Submenu 1-1-2" },
          ],
        },
        { id: "1-2", label: "Submenu 1-2" },
      ],
    },
    {
      id: "2",
      label: "Menu 2",
      children: [
        { id: "2-1", label: "Submenu 2-1" },
        { id: "2-2", label: "Submenu 2-2" },
      ],
    },
  ];

  const NestedMenu = ({ menuItems }: { menuItems: MenuItemProps[] }) => {
    const renderMenu = (items: any, parentId = "") =>
      items.map((item: MenuItemProps, index: number) => {
        const menuId: any = `${parentId}-${item.id}`; // Create a unique ID
        const isOpen = openMenus[menuId] || false;

        return (
          <div key={menuId} style={{ marginLeft: parentId ? 20 : 0 }}>
            {/* Menu Item */}
            <button onClick={() => toggleMenu(menuId)}>
              {item.label} {isOpen ? "▼" : "▶"}
            </button>

            {/* Nested Items */}
            {isOpen && item.children && (
              <div>{renderMenu(item.children, menuId)}</div>
            )}
          </div>
        );
      });

    return <div>{renderMenu(menuItems)}</div>;
  };

  return (
    // <div className={styles.carouselContainer}>
    //   <div
    //     className={styles.carouselSlide}
    //     style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //   >
    //     {images.map((img, index) => (
    //       <img key={index} src={img} alt={`Slide ${index}`} className={styles.slide} />
    //     ))}
    //   </div>

    //   <button onClick={prevSlide} className={styles.navButton}>Prev</button>
    //   <button onClick={nextSlide} className={styles.navButton}>Next</button>
    // </div>
    <NestedMenu menuItems={menuItems} />
  );
};

export default ThumbCarousel;
