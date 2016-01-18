import { ADD, SORT, CARD_CLICK, RENAMING, RENAMED } from './types.js';

let lastId = 0;

const getAddAction = () => ({ type: ADD, count: 0, id: lastId++ });
const getSortAction = () => ({ type: SORT });
const getCardClick = (id) => ({ type: CARD_CLICK, id });

const getRenamingAction = () => ({ type: RENAMING });
const getRenamedAction = (newName) => ({ type: RENAMED, newName });

export {
  getAddAction,
  getSortAction,
  getCardClick,

  getRenamingAction,
  getRenamedAction
};
