interface OnModalDisplay {
    onModalDisplay: (CreateModal :boolean) => void
}

const ChildComponent = ({onModalDisplay} :OnModalDisplay) => {
    return (
        <button onClick={() => {onModalDisplay(false)}}>dd</button>
    )
}
export default ChildComponent