function Header({ title, description }) {
    return (
        <>
            <div>
                <div className="fw-bold">
                    {title}
                </div>

                <small className="text-secondary">
                    {description}
                </small>
            </div>

            <hr />
        </>
    );
}

export default Header;