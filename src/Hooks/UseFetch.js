import { useEffect, useState } from "react";
import dataBase from "../FirebaseConfig";
import { ref, onValue } from "firebase/database"



function useFetch (path) {
	let [data, setData] = useState([]);
	useEffect(() => {
		onValue(ref(dataBase, path), snapshot => {
			const value = snapshot.val();
			setData(value);
		});
	}, [path]);
	return data;	
}	



export default useFetch;