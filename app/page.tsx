import ExportedImage from 'next-image-export-optimizer';
import s from './page.module.css';

export default function Home() {
  return (
    <div className={s.page}>
      <main className={s.main}>
        <ExportedImage className={s.logo} src="/images/next.svg" alt="Next.js logo" width={180} height={38} priority />
        <ol>
          <li>
            Get started by editing <code>app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        <ExportedImage src={'/images/example.png'} alt="Example Image." priority />
      </main>
    </div>
  );
}
