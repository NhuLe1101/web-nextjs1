import styles from "@/styles/ListProduct.module.css";
import CardProduct from './CardProduct';
const ListProduct = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>KHUYẾN MÃI</h1>
            <div className={styles.wrapper}>
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
        
    );
}

export default ListProduct;