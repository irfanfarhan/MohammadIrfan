import { Link } from '../../shared/model/link.model';

export class ContactDataModel {
  name: string;
  email: string;
  message: string;
  links: Array<Link>;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
