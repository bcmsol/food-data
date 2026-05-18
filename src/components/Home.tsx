import Hero from './Hero';
import CategoryNav from './CategoryNav';
import BlogGrid from './BlogGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <main>
        <BlogGrid />
      </main>
    </>
  );
}
