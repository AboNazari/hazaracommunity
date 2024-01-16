import Link from "next/link";

const Button = ({ primary, text, link }) => {
    const primaryClasses = 'bg-primary border-primary border-2 text-white hover:bg-secondary hover:text-white duration-300 ease-in hover:border-secondary rounded-md';
    const secondaryClasses = 'bg-transparent text-white hover:bg-secondary border-2 border-white hover:text-white hover:border-secondary duration-300 ease-in rounded-md';

    const classes = primary ? primaryClasses : secondaryClasses;

    return (
        <button className={`px-4 py-2  ${classes}`}>
            <Link href={link}>{text}</Link>
        </button>
    );
};

export default Button;