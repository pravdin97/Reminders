import Reminder, {IReminder} from '../db/models/reminder';

export interface IService {
  getAll(): Promise<void>;
  get(id: number): Promise<void>;
  create(data: object): Promise<void>;
  update(id: number, data: object): Promise<void>;
  delete(id: number): Promise<void>;
}

class Service implements IService {
  private model: IReminder;
  constructor(model: IReminder) {
    this.model = model;
  }

  async getAll() {
    //
  }

  async get(id: number) {
    //
  }

  async create(data: object) {
    //
  }

  async update(id: number, data: object) {
    //
  }

  async delete(id: number) {
    //
  }
}

export default new Service(Reminder);
