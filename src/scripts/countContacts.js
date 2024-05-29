import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countConstacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const parseContacts = JSON.parse(contacts);
    return parseContacts.length;
  } catch (error) {
    console.log(error);
  }
};


console.log(await countConstacts());
