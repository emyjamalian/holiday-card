import Image from "next/image";

import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <Image
      src="/img/home/partners/gdg-google-developer-group-logo.svg"
      alt="Logo"
      width={70}
      height={40}
      objectFit="cover"
      className={styles.logo}
    />
  );
}
