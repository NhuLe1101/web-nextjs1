import Head from 'next/head';
import styles from "@/styles/Register.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Đăng ký</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link href='https://fonts.googleapis.com/css?family=MuseoModerno' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Saira Stencil One' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Mali' rel='stylesheet'>
                </link>
            </Head>
            <div className={styles.form_box}>
                <div className={styles.form_value}>
                    <form action="">
                        <h1 className={styles.title}>ĐĂNG KÝ</h1>
                        <div className={styles.input_box}>
                            <input className={styles.input} type="text" required/>
                            <Image className={styles.icon} src="/icon/icons8-user-64.png" alt="" width="35" height="35"></Image>
                            <label className={styles.text_input} htmlFor="">Tài khoản</label>
                            <div className={styles.underline} ></div>
                        </div>
                        <div className={styles.input_box}>
                            <input className={styles.input} type="text" required/>
                            <Image className={styles.icon} src="/icon/icons8-lock-48.png" alt="" width="35" height="35" ></Image>
                            <label className={styles.text_input} htmlFor="">Mật khẩu</label>
                            <div className={styles.underline} ></div>
                        </div>
                        <button className={styles.btnLogin}>ĐĂNG NHẬP</button>
                      
                    </form>

                </div>
            </div>

        </div>
    );
}

export default Register;