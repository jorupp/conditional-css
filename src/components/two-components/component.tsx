import Component1 from "./component1";
import Component2 from "./component2";

export interface Props {
    site: 'site-1' | 'site-2';
}

export default function TwoComponents({ site }: Props) {
    return (
        <div>
            <h1>Two Components</h1>
            <p>
                This is a shared component that is used in both sites. The site is: {site}
            </p>
            {site === 'site-1' ? <Component1/> : <Component2/>}
        </div>
    );
}