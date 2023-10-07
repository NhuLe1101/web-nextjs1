import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Link href={"/"}>
                    <Image src="/image/logo2.png" alt="" width="120" height="120" />
                </Link>
            </div>
            <div className={styles.item}>
                <div className={styles.menu}>
                    <li className={styles.menu_item}>
                        <Link className={styles.text} href={"/"}>Trang chủ</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link className={styles.text} href={"/Product"}>Sản phẩm</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link className={styles.text} href={"/Product"}>Về chúng tôi</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link className={styles.text} href={"/Product"}>Liên hệ</Link>
                    </li>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.right_bar}>
                    {/* <div className={styles.right_bar_item}>
                        <Image className={styles.span} src="/icon/icon-user.png" alt="" width="40" height="40" />
                        <div className={styles.user_container}>
                            <Link href={"/Login"}>Đăng nhập/Đăng ký</Link>
                            <Link href={"/Wishlist"}>Wishlist</Link>
                            <Link href={"/"}>Thông tin tài khoản</Link>
                        </div>
                    </div> */}
                    <div className={styles.right_bar_item}>
                        <Image className={styles.span} src="/icon/icon-search.png" alt="" width="40" height="40" />
                    </div>
                    <div className={styles.right_bar_item}>
                        <Image className={styles.span} src="/icon/icon-cart.png" alt="" width="40" height="40" />
                    </div>
                    <div className={styles.right_bar_item}>
                        <Link className={styles.text} href={"/Login"}>Đăng nhập</Link>
                        <span className={styles.text}>/</span>
                        <Link className={styles.text} href={"/Register"}>Đăng ký</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;