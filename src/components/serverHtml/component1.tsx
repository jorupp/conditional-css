'use client';
import { useServerInsertedHTML } from 'next/navigation';

export default function Component1() {
    useServerInsertedHTML(() => <style>{`
        body {
            font-style: italic;
        }
    `}</style>)
    return <div>Component 1</div>;
}