
const withBorder = (Component) => {
    return () => {
        return (
            <div className="border-4 border-black">
                <Component />
            </div>
        )
    }
}

export default withBorder