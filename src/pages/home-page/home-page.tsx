import { useState } from "react";
import BookmarkSidebar from "../../components/layout/bookmark-sidebar/bookmark-sidebar";
import LibraryMain from "../../components/layout/library-main/library-main";
import Header from "../../components/layout/site-header/side-header";

import styles from "./home-page.module.scss";

function Home() {
    const [search, setSearch] = useState<string>("")
    return (
        <>
            <Header setSearch={setSearch} search={search}/>
            <main id={styles.main}>
                <BookmarkSidebar />
                <LibraryMain search={search} />
            </main>
        </>
    );
}

export default Home;
