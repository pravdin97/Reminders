import Repository from '../db/models/reminder';

class Service {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll() {

  }

  async get(id) {

  }

  async create(data) {

  }

  async update(id, data) {

  }

  async delete(id) {

  }
}

export default new Service(Repository);
