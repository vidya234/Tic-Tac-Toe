

// eslint-disable-next-line react/prop-types
export function Button({value, onSquareClicked}){

	return <button  className="border-4 border-black text-center w-20 h-20 flex items-center justify-center text-5xl m-1 bg-white" onClick={onSquareClicked}>{value}</button>
}