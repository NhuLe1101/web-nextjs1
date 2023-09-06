import styles from "@/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <div className={styles.container}>
            {/* <div className={styles.item}>
                <Link className={styles.logo} href={"/"}>
                    <Image src="/image/logo2.png" alt="" width="120" height="120" />
                </Link>
            </div> */}
            <div className={styles.item}>
            <h1 className={styles.title}>ĐỊA CHỈ LIÊN HỆ</h1>
                <p className={styles.p}>
                    257 Nguyễn Biểu, P2, Quận 5, TPHCM
                    <br /> Giờ làm việc từ 9:00 - 21:00 hàng ngày
                    <br /> SĐT: (+84) 123 456 675
                </p>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>HỖ TRỢ</h1>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Các câu hỏi thường gặp</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Điều khoản</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Vấn đề giao hàng</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Vấn đề thanh toán</Link>
                </li>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>CÁC CHÍNH SÁCH</h1>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Bảo mật thông tin</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Chính sách hoàn trả</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Chính sách bảo hành</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Chính sách thanh toán</Link>
                </li>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>VỀ CHÚNG TÔI</h1>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Giới thiệu</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Tuyển dụng</Link>
                </li>
                <li className={styles.title_item}>
                    <Link className={styles.text} href={"/"}>Hệ thống cửa hàng</Link>
                </li>
            </div>
        </div>
    );
}

export default Footer;