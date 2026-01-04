export const withCardLook = (Component) => {
    return (props) => {
        return (
            <div className="bg-gray-700 p-10 rounded-2xl mb-3">
                <Component {...props}/>
            </div>
        )
    }
}