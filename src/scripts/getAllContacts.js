import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const getContact = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(getContact);
    return parseContacts;
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());
