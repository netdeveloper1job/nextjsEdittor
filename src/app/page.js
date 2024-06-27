import dynamic from 'next/dynamic';

const Editor = dynamic( () => import( '@/app/Editor' ), { ssr: false } );



export default function Home() {
  return (
    <div>
      <Editor />
    </div>
  );
}
