import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./ProductCard.module.css";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
  price,
  description,
  imageUrl,
}) => {
  const sizes = ["6", "7", "8", "9", "10", "11"];
  const colors = ["Pastel", "Black", "White", "Blue"];

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} width={400} height={400} priority />
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.category}>{category}</p>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.selectors}>
          <Select.Root>
            <Select.Trigger className={styles.selectTrigger}>
              <Select.Value placeholder="Color" />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className={styles.selectContent}>
                <Select.Viewport>
                  {colors.map((color) => (
                    <Select.Item
                      key={color}
                      value={color.toLowerCase()}
                      className={styles.selectItem}
                    >
                      <Select.ItemText>{color}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <Select.Root>
            <Select.Trigger className={styles.selectTrigger}>
              <Select.Value placeholder="Size" />
              <Select.Icon>
                <ChevronDownIcon />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className={styles.selectContent}>
                <Select.Viewport>
                  {sizes.map((size) => (
                    <Select.Item
                      key={size}
                      value={size}
                      className={styles.selectItem}
                    >
                      <Select.ItemText>{size}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>
          <button className={styles.buyButton}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
