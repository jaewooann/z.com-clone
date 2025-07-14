import BackButton from "../_component/BackButton";
import SearchForm from "../_component/SearchForm";
import SearchResult from "./_component/SearchResult";
import Tab from "./_component/Tab";
import styles from "./search.module.css";

interface SearchPageProps {
  searchParams: Promise<{ q: string; f?: string; pf?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = await searchParams;

  return (
    <main className={styles.main}>
      <div className={styles.searchTop}>
        <div className={styles.searchZone}>
          <div className={styles.buttonZone}>
            <BackButton />
          </div>
          <div className={styles.formZone}>
            <SearchForm q={query.q} pf={query.pf} f={query.f} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={styles.list}>
        <SearchResult searchParams={query} />
      </div>
    </main>
  );
}
