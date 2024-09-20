'use client';
import { useServerInsertedHTML } from 'next/navigation';

export default function Component2() {
    useServerInsertedHTML(() => <style>{`
        body {
            margin: 1rem;
            border: 2px solid black;
            padding: 1rem;
        }
    `}</style>)
    return <div>Component 2</div>;
}