export const useCardLook = (Component) => {
    return (props) => {
        return (
            <div className="bg-gray-700 p-10 rounded-2xl">
                <Component {...props}/>
            </div>
        )
    }
}