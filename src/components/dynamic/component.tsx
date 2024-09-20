import dynamic from "next/dynamic";

export interface Props {
    site: 'site-1' | 'site-2';
}

const DynamicComponent1 = dynamic(() => import('./component1'), {
    loading: () => <p>Loading...</p>,
});

const DynamicComponent2 = dynamic(() => import('./component2'), {
    loading: () => <p>Loading...</p>,
});
   
export default function Dynamic({ site }: Props) {
    return (
        <div>
            <h1>Dynamic</h1>
            <p>
                This is a shared component that is used in both sites. The site is: {site}
            </p>
            {site === 'site-1' ? <DynamicComponent1/> : <DynamicComponent2/>}
        </div>
    );
}