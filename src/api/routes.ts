import express from 'express';
import controller from './controller';

const { Router } = express;

const router = new (Router as any)({ mergeParams: true });

router.get('/', controller.getAll);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
