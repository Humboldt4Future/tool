import axios from 'axios';

const url = 'http://91.9.69.159:5000/entries';

export const fetchEntries = () => axios.get(url);
export const createEntry = (newEntry) => axios.post(url, newEntry);
export const updateEntry = (id, updatedEntry) => axios.patch(`${url}/${id}`, updatedEntry);
export const deleteEntry = (id) => axios.delete(`${url}/${id}`);