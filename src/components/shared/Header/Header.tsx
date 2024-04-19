import Link from "next/link";
import styles from './Header.module.sass'
import { cookies } from "next/headers";


export const Header = () => {
    const cookiesStore = cookies()
    const token = cookiesStore.get('accesToken')?.value
   
    return(

        <header>
            <nav>
                <ul className={styles.Header__list}>
                    <Link href="/">
                    <li>Home</li>
                    </Link>

                    <Link href="/store">
                    <li>Store</li>
                    </Link>

                
                </ul>
                {token ? (<p>Hola!</p>): (<Link href="/login">Login</Link>)}
            </nav>
        </header>
    )
}