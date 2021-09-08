import { db } from './firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

type readDatabase = {
	table: string;
	fieldId: string;
};

// Add a new document in collection provided in "table"
// "fieldId" is the id of the document in the collection
export async function setDatabase(table: string, fieldId: string, data: any) {
	return await setDoc(doc(db, table, fieldId), data);
}

export async function updateDatabase(
	table: string,
	fieldId: string,
	data: any
) {
	return await setDoc(doc(db, table, fieldId), data);
}

export async function readDatabase(table: string, fieldId: string) {
	return await getDoc(doc(db, table, fieldId));
}
