import axios from 'axios';

const url = 'http://87.163.234.106:5000/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);
//export const updateEntry = (id, updatedEntry) => axios.patch(`${url}/${id}`, updatedEntry);
//export const deleteEntry = (id) => axios.delete(`${url}/${id}`);