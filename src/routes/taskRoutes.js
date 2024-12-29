const express = require('express');
const { body, param } = require('express-validator');
const taskController = require('../controllers/taskController');

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una tarea con un título y una descripción opcional.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El título de la tarea.
 *               description:
 *                 type: string
 *                 description: La descripción de la tarea.
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente.
 *       400:
 *         description: Datos de entrada inválidos.
 *       500:
 *         description: Error al crear la tarea.
 */

router.post(
    '/',
    body('title').notEmpty().withMessage('El campo título es obligatorio'),
    taskController.createTask
);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener lista de tareas
 *     description: Devuelve una lista de todas las tareas, con la opción de filtrar por estado.
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [true, false]
 *         description: Filtrar por estado de la tarea.
 *     responses:
 *       200:
 *         description: Lista de tareas.
 *       500:
 *         description: Error al obtener las tareas.
 */

router.get('/', taskController.getTasks);

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Obtener tarea por ID
 *     description: Devuelve los detalles de una tarea específica por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea.
 *     responses:
 *       200:
 *         description: Tarea encontrada.
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Tarea no encontrada.
 *       500:
 *         description: Error al obtener la tarea.
 */

router.get(
    '/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    taskController.getTaskById
);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualizar tarea
 *     description: Actualiza una tarea existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea a actualizar.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: El nuevo título de la tarea.
 *               description:
 *                 type: string
 *                 description: La nueva descripción de la tarea.
 *     responses:
 *       200:
 *         description: Tarea actualizada exitosamente.
 *       400:
 *         description: Datos inválidos o ID inválido.
 *       404:
 *         description: Tarea no encontrada.
 *       500:
 *         description: Error al actualizar la tarea.
 */

router.put(
    '/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('title').optional().notEmpty().withMessage('El título no puede estar vacío'),
    taskController.updateTask
);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar tarea
 *     description: Elimina una tarea existente por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: El ID de la tarea a eliminar.
 *     responses:
 *       200:
 *         description: Tarea eliminada exitosamente.
 *       400:
 *         description: ID inválido.
 *       404:
 *         description: Tarea no encontrada.
 *       500:
 *         description: Error al eliminar la tarea.
 */

router.delete(
    '/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    taskController.deleteTask
);

module.exports = router;
