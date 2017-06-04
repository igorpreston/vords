import { Record } from 'immutable';

export const DocumentRecord = Record({
  id: null,
  name: null,
  format: null,
  delta: null,
});

export class Document extends DocumentRecord {
  constructor(props) {
    super(props);
  }
};