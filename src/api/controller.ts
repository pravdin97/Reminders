import { Request, Response } from 'express';
import Service, {IService} from './service';

class Controller {
  private service: IService;
  constructor(service: IService) {
    this.service = service;
  }

  async getAll(req: Request, res: Response) {
    const data = await this.service.getAll();

    res.json({ data });
  }

  async get(req: Request, res: Response) {
    const {id} = req.params;
    const data = await this.service.get(Number(id));

    res.json({ data });
  }

  async create(req: Request, res: Response) {
    const {title, endDate, duration} = req.body;
    await this.service.create({title, endDate, duration});

    res.sendStatus(201);
  }

  async update(req: Request, res: Response) {
    const {id} = req.params;
    const {title, endDate, duration} = req.body;
    await this.service.update(Number(id), {title, endDate, duration});

    res.sendStatus(204);
  }

  async delete(req: Request, res: Response) {
    const {id} = req.params;
    await this.service.delete(Number(id));

    res.sendStatus(202);
  }
}

const controller = new Controller(Service);

export default controller;

