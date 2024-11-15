interface Props {
    className?: string;
}

const RightArrow = (props: Props) => {
    return (
        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={props.className} d="M1 1L6 6L1 11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
}

export default RightArrow;