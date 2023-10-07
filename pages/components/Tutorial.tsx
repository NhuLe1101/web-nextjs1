import Image from 'next/image';
import styles from '@/styles/Tutorial.module.css';
const Tutorial = () => {
    return (
        <div className={styles.container}>
            {/* <img className={styles.img} src='/image/background1.jpg' alt=""></img> */}
                <h1 className={styles.title}>CÁC BƯỚC MUA HÀNG</h1>
                <div className={styles.step}>

                <div className={styles.item}>
                    <div className={styles.border_item}>
                        <div className={styles.icon}>
                            <Image src="/icon/icon-search.png" alt="" width="70" height="70"></Image>
                        </div>
                    </div>
                    <p className={styles.item_name}>TÌM KIẾM</p>
                    <span className={styles.desc}>Tìm kiếm và lựa chọn những sản phẩm theo sở thích của bạn</span>
                </div>
                <div className={styles.item}>
                    <div className={styles.border_item}>
                        <div className={styles.icon}>
                            <Image src="/icon/icon-cart.png" alt="" width="70" height="78"></Image>
                        </div>
                    </div>
                    <p className={styles.item_name}>THÊM VÀO GIỎ HÀNG</p>
                    <span className={styles.desc}>Thêm sản phẩm vào giỏ hàng</span>
                </div>
                <div className={styles.item}>
                    <div className={styles.border_item}>
                        <div className={styles.icon}>
                            <Image src="/icon/icon-checkout.png" alt="" width="70" height="70"></Image>
                        </div>
                    </div>
                    <p className={styles.item_name}>THANH TOÁN</p>
                    <span className={styles.desc}>Thông tin giao hàng và thanh toán</span>
                </div>
                <div className={styles.item}>
                    <div className={styles.border_item_none}>
                        <div className={styles.icon}>
                            <Image src="/icon/icon-shipping.png" alt="" width="70" height="70"></Image>
                        </div>
                    </div>
                    <p className={styles.item_name}>GIAO HÀNG</p>
                    <span className={styles.desc}>Chờ đến khi đơn hàng được giao trong 3-7 ngày</span>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;