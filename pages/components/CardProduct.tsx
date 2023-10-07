import styles from '@/styles/CardProduct.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const CardProduct = () => {
    const [isIconClicked, setIsIconClicked] = useState(false);
    const handleClick = () => {
        setIsIconClicked(!isIconClicked);
    };
    return (
        <div className={styles.container}>
            <span className={styles.sale}>-50%</span>
            <div className={styles.icons}>
                <Image className={styles.img} src="/productImg/đen-bj5082.png" alt="" width="300" height="300"  >
                </Image>
                <div className={styles.wishlist}>
                    <button onClick={handleClick} className={styles.btnWL} >
                        {isIconClicked ? <Image className={styles.card_img} src="/icon/icon-wishlistred.png" alt="" width="40" height="40" />
                            : <Image className={styles.card_img} src="/icon/icon-wishlist.png" alt="" width="40" height="40" />}
                    </button>
                </div>
                <div className={styles.wishlist}>
                    <button className={styles.btnWL} >
                        <Link href={"/ProdDetail"}>
                        <Image src="/icon/icon-eye.png" alt="" width="40" height="40" />
                        </Link>
                    </button>
                </div>
            </div>
            <p className={styles.nameProd}>Mắt kính BJ5082</p>
            <div className={styles.price}>
                <span className={styles.priceToSell}>1.000.000 đ</span>
                <strong className={styles.priceDiscount}>500.000 đ</strong>
            </div>
        </div>
    );
}

export default CardProduct;