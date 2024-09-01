const UserIcon = (props) => {
    const { image, size } = props;
    const styling = `border border-black rounded-full shadow-sm max-w-${size} max-h-${size} min-w-${size} min-h-${size}`;
    return (
        <>
            <img className={styling} src={image} alt="" />
        </>
    );
};
export default UserIcon;
