import Service from './service';

class Controller {
  private service: Service;
  constructor(service) {
    this.service = service;
  }

  async getAll(req, res) {
    const data = await this.service.getAll();

    res.json({ data });
  }

  async get(req, res) {

  }

  async create(req, res) {
    this.service.create();
  }

  async update(req, res) {

  }

  async delete(req, res) {

  }
}

export default new Controller(Service);
