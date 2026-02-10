'use client'

import type { FC } from "react";
import { Button } from "@repo/ui/button";

const onClick = () => {
    alert("I'm a shared component!");
}

const Home: FC = () => {
    return <Button label="Click me in Next.js" variant="warning" onClick={onClick} />;
};

export default Home;